import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dee0de480dc820",
    pass: "602ef1bd71b432",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Jefferson <oi@jeffersonbrandao.com>",
      to: "Jefferson Brandao <jeffersonbraster@gmail.com>",
      subject,
      html: body,
    });
  }
}
