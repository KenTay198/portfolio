import contactContent from "@dictionaries/contact.content";
import React from "react";
import ContactForm from "@modules/contact/organisms/ContactForm";
import SocialNetworks from "@atoms/SocialNetworks";
import { getMetadata } from "@utils/functions";

export const generateMetadata = ({ params }: { params: { lang: string } }) => {
  const dictionary = contactContent[params.lang];

  return getMetadata(dictionary, "/contact", params.lang);
};

function ContactPage({ params }: { params: { lang: string } }) {
  const dictionary = contactContent[params.lang];

  return (
    <div className="pb-24 px-5">
      <h1 className="text-center max-[410px]:break-words">
        {dictionary.title}
      </h1>

      <section className="flex items-center gap-10 max-[900px]:flex-col">
        <div className="flex-1 min-[900px]:border-r">
          <h2 className="mb-2 font-bold text-center text-primary dark:text-accent">
            {dictionary.myNetworks}
          </h2>
          <SocialNetworks withPhone className="mx-auto" />
        </div>
        <hr className="w-full min-[900px]:hidden" />
        <div className="flex-2 bg-accent p-3 rounded-lg text-black shadow-md">
          <h2 className="mb-2 font-bold text-center text-primary">
            {dictionary.contactForm}
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
