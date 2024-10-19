import { IFormData } from "@modules/contact/organisms/ContactForm";
import { capitalize } from "@utils/functions";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const getNodemailer = () => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  return transport;
}

const sendMail = (options: Mail.Options) => {
  const nodemailer = getNodemailer()
  return new Promise<void>((resolve, reject) => {
    nodemailer.sendMail(options, (err) => {
      if (!err) {
        resolve()
      } else {
        reject(err);
      }
    })
  })
}

export const POST = async (req: Request) => {
  try {
    const body: IFormData = await req.json();
    const { firstName, lastName, email, phone, object, message } = body;
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: `Formulaire de contact : ${object}`,
      text: `
      Un message est arrivé du portfolio !
      NOM & Prénom : ${lastName?.toUpperCase()} ${capitalize(firstName ?? "")}
      Adresse e-mail : ${email}
      Numéro de téléphone : ${phone}
      Message : ${message}
      `
    }

    await sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: `Votre mail a été envoyé !`,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.log("[nodemailer] :", error);
    return new Response(
      JSON.stringify({
        message: "Votre mail n'a pas été envoyé. Veuillez contacter un administrateur.",
      }),
      { status: error?.status ?? 500 }
    );
  }
};