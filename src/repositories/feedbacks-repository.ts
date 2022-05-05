export type feedbackProps = {
  type: string;
  comment: string;
  screenshot?: string;
};

export interface FeedbacksRepository {
  create: ({ type, comment, screenshot }: feedbackProps) => Promise<void>;
}
