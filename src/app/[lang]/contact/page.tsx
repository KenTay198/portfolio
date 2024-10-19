import contactContent from "@dictionaries/contact.content";
import React from "react";
import ContactForm from "@modules/contact/organisms/ContactForm";
import SocialNetworks from "@atoms/SocialNetworks";
import { capitalize } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = contactContent[params.lang];

  return {
    title: capitalize(dictionary.title) + " | John-Kenneth TAYLOR AFONAH",
    description: dictionary.meta.description,
  };
};

function ContactPage({ params }: { params: { lang: string } }) {
  const dictionary = contactContent[params.lang];

  return (
    <div className="pb-24 px-5">
      <h1 className="text-center max-[410px]:break-words">
        {dictionary.title}
      </h1>

      <section className="mb-10">
        <h2 className="mb-2 font-bold text-center text-primary dark:text-accent">{dictionary.myNetworks}</h2>
        <SocialNetworks withPhone className="mx-auto" />
      </section>

      <hr className="mb-10" />

      <section>
        <h2 className="mb-2 font-bold text-center text-primary dark:text-accent">{dictionary.contactForm}</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactPage;
