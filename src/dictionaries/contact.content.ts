interface IContactContent {
    title: string;
    formLabels: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        object: string;
        message: string;
    }
    responseMessage: {
        success: string;
        error: string;
    }
}

const contactContent: Record<string, IContactContent> = {
    fr: {
        title: "ME CONTACTER",
        formLabels: {
            firstName: "Prénom",
            lastName: "Nom",
            email: "Email",
            phone: "Numéro de téléphone",
            object: "Objet du message",
            message: "Message",
        },
        responseMessage: {
            success: "Votre message a été envoyé ! Vous recevrez une réponse dans les prochains jours.",
            error: "Votre message n'a pas pu être envoyé. Veuillez rééssayer ou contacter un administrateur."
        }
    },
    en: {
        title: "CONTACT ME",
        formLabels: {
            firstName: "First name",
            lastName: "Last name",
            email: "Email",
            phone: "Phone number",
            object: "Subject",
            message: "Message",
        },
        responseMessage: {
            success: "Your message has been sent ! You'll receive a reply in the next few days.",
            error: "Your message could not be sent. Please try again or contact an administrator."
        }
    },
};

export default contactContent;
