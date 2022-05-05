import SubmitFeedbackUseCase from "./submit-feedback-use-cases";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("submit feedback", () => {
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "Bug no site",
        screenshot: "data:image/png;base64,129837sed8s7ds7ds",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "Bug no site",
        screenshot: "data:image/png;base64,129837sed8s7ds7ds",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,129837sed8s7ds7ds",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: "BUG",
        comment: "bug no site",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
