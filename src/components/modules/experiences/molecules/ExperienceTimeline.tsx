"use client";
import experiencesContent from "@dictionaries/experiences.content";
import React, { HTMLAttributes, useState } from "react";
import { FaSchool, FaSuitcase } from "react-icons/fa";
import { useLocaleState } from "src/context/LocaleContext";
import ExperienceCell from "../atoms/ExperienceCell";

type Category = "work" | "school";

const ExperienceTimeline = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { locale } = useLocaleState();
  const [selected, setSelected] = useState("school");
  const dictionary = experiencesContent[locale];

  const toggleSelected = (type: Category) => {
    if (window.innerWidth > 600) return;
    console.log(window.innerWidth);
    setSelected(type);
  };

  return (
    <table {...props} className="w-full overflow-hidden">
      <thead>
        <tr>
          <th>
            <CategoryHeader
              label={dictionary.categories.school.toUpperCase()}
              type="school"
              selected={selected === "school"}
              toggleSelected={toggleSelected}
            />
          </th>
          <th>
            <CategoryHeader
              label={dictionary.categories.work.toUpperCase()}
              type="work"
              selected={selected === "work"}
              toggleSelected={toggleSelected}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from(
          new Array(
            Math.max(dictionary.work.length, dictionary.school.length)
          ).keys()
        ).map((i) => {
          const key = `experience-${i}`;
          const work = dictionary.work[i];
          const school = dictionary.school[i];

          return (
            <tr key={key}>
              <td className="align-top relative border-r-2 border-accent after:absolute after:right-0 after:top-0 after:w-5 after:h-5 after:duration-150 after:bg-secondary dark:after:bg-primary after:border-accent after:border-[2px] after:rounded-full after:translate-x-[calc(50%+1px)]">
                {school && (
                  <ExperienceCell
                    {...school}
                    index={i}
                    selected={selected === "school"}
                  />
                )}
              </td>
              <td className="align-top">
                {work && (
                  <ExperienceCell
                    {...work}
                    index={i}
                    selected={selected === "work"}
                  />
                )}
              </td>
            </tr>
          );
        })}
        <tr>
          <td className="border-r-2 border-accent border-dashed h-5 pointer-events-none"></td>
        </tr>
        <tr>
          <td className="border-r-2 border-accent border-dotted h-5 pointer-events-none"></td>
        </tr>
      </tbody>
    </table>
  );
};

interface IHeaderProps {
  label: string;
  type: Category;
  selected: boolean;
  toggleSelected: (category: Category) => void;
}

const CategoryHeader = ({
  type,
  label,
  selected,
  toggleSelected,
}: IHeaderProps) => {
  const Icon = type === "school" ? FaSchool : FaSuitcase;

  return (
    <div
      onClick={() => toggleSelected(type)}
      className={`flex flex-col gap-2 px-2 py-2 items-center duration-200 max-[600px]:cursor-pointer ${
        selected
          ? "max-[600px]:scale-110"
          : "max-[600px]:scale-90 max-[600px]:hover:scale-110"
      }`}
    >
      <div className="p-3 bg-accent text-primary w-fit h-fit rounded-full">
        <Icon size={30} />
      </div>
      <p className={`h3 text-accent ${selected ? "" : "max-[600px]:hidden"}`}>
        {label}
      </p>
    </div>
  );
};

export default ExperienceTimeline;
