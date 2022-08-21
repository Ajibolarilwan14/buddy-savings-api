import { MailtrapClient } from "mailtrap";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const client = new MailtrapClient({ token: process.env.SMTP_HOST });

export const testEmail = async (email) => {
  const mail = client
    .send({
      // @ts-ignore
      from: process.env.SENDER_EMAIL,
      // @ts-ignore
      to: "ajibolarilwan14@gmail.com",
      subject: "Testing Email",
      text: "I am just testing this out!",
    })
    .then(() => console.log("Mail sent!"))
    .catch((err) => {
      throw new Error();
    });

  return mail;
};
