interface IContactContent {
  title: string;
  meta: {
    description: string;
  };
  myNetworks: string;
  contactForm: string;
  formLabels: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    object: string;
    message: string;
  };
  responseMessage: {
    success: string;
    error: string;
  };
}

const contactContent: Record<string, IContactContent> = {
  fr: {
    title: "ME CONTACTER",
    meta: {
      description:
        "Contactez-moi par mes différents réseaux sociaux ou par mon formulaire de contact.",
    },
    formLabels: {
      firstName: "Prénom",
      lastName: "Nom",
      email: "Email",
      phone: "Numéro de téléphone",
      object: "Objet du message",
      message: "Message",
    },
    responseMessage: {
      success:
        "Votre message a été envoyé ! Vous recevrez une réponse dans les prochains jours.",
      error:
        "Votre message n'a pas pu être envoyé. Veuillez rééssayer ou contacter un administrateur.",
    },
    myNetworks: "Mes réseaux",
    contactForm: "Formulaire de contact",
  },
  en: {
    title: "CONTACT ME",
    meta: {
      description:
        "Contact me on my social networks or by my contact form.",
    },
    formLabels: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone number",
      object: "Subject",
      message: "Message",
    },
    responseMessage: {
      success:
        "Your message has been sent ! You'll receive a reply in the next few days.",
      error:
        "Your message could not be sent. Please try again or contact an administrator.",
    },
    myNetworks: "My networks",
    contactForm: "Contact form",
  },
};

export default contactContent;
