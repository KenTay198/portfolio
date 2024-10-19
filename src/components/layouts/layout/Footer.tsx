import SocialNetworks from "@atoms/SocialNetworks";
import layoutContent from "@dictionaries/layout.content";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { useLocaleState } from "src/context/LocaleContext";

const Footer = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const dictionary = layoutContent[locale];

  return (
    <div {...props} className="bg-primary text-white px-5 py-5">
      <div className="flex flex-col gap-[30px] mx-auto max-w-[1700px]">
        <div className="flex flex-wrap justify-between items-center max-[940px]:flex-col-reverse">
          <SocialNetworks withPhone className="justify-center" />
          <div className="flex flex-wrap p-2.5 gap-2.5 max-[450px]:flex-col max-[450px]:text-center">
            {dictionary.navbar.map(({ label, href }) => (
              <Link
                key={`footer-link-${href}`}
                href={href}
                className="duration-200 hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <hr />

        <div className="flex flex-wrap gap-2.5 justify-between items-center max-[975px]:text-center max-[975px]:flex-col max-[975px]:justify-center">
          <p>
            Copyright © 2024 John-Kenneth TAYLOR AFONAH. Tous droits réservés.
          </p>
          <p>Réalisé avec Next, TypeScript et TailwindCSS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
