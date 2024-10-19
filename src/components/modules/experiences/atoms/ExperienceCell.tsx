"use client";
import { IExperience } from "@dictionaries/experiences.content";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

interface IProps extends IExperience, HTMLAttributes<HTMLDivElement> {
  index: number;
  title: string;
  selected: boolean;
}

const ExperienceCell = ({
  date,
  etablissement,
  index,
  title,
  missions,
  className,
  selected,
}: IProps) => {
  const key = `experience-${index}`;

  return (
    <div
      className={[
        "flex flex-col p-5 overflow-hidden",
        `${selected ? "max-[600px]:max-w-full" : "max-[600px]:max-w-0"}`,
        className,
      ].join(" ")}
    >
      <div className={`w-fit ${selected ? "" : "max-[600px]:opacity-0 max-[600px]:min-w-[310px]"}`}>
        <p className="font-bold h4 text-accent">{date}</p>
        <p className="font-bold h4 text-primary dark:text-secondary">
          {etablissement} | {title}
        </p>
        <ul className="max-[450px]:text-base">
          {missions?.map(({ label, href }, i) => {
            if (href) {
              return (
                <Link
                  target="_blank"
                  className="flex text-accent underline duration-200 hover:brightness-75"
                  key={key + `-mission-${i}`}
                  href={href}
                >
                  <li className="ml-6 list-disc" key={key + `-mission-${i}`}>
                    {label}
                  </li>
                </Link>
              );
            }

            return (
              <li
                className="ml-6 list-disc text-black dark:text-white"
                key={key + `-mission-${i}`}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCell;
