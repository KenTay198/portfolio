import { ISkill, ISkillGroup } from "@dictionaries/skills.content";
import React, { HTMLAttributes } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  skillGroup: ISkillGroup;
  selected: boolean;
}

const SkillGroupCard = ({ skillGroup, selected, ...props }: IProps) => {
  const { name, skills } = skillGroup;

  return (
    <>
      <div
        {...props}
        className={`bg-primary dark:bg-accent p-2.5 rounded-lg w-full max-w-[500px] shadow cursor-pointer duration-150  ${
          selected ? "brightness-75" : "hover:brightness-75"
        }`}
        key={`group-${name}`}
      >
        <p className="h2 font-bold text-secondary dark:text-primary uppercase">{name}</p>

        <ul className="flex flex-col text-secondary dark:text-primary gap-2 py-2">
          {skills
            .sort((a, b) => b.value - a.value)
            .map((skill) => {
              return (
                <SkillCard
                  key={`skill-group-${name}-${skill.name}`}
                  skill={skill}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

interface ISkillCardProps extends HTMLAttributes<HTMLLIElement> {
  skill: ISkill;
}

const SkillCard = ({ skill, ...props }: ISkillCardProps) => {
  const { label, name, value } = skill;
  const hasHalf = value - Math.floor(value) !== 0;

  return (
    <li {...props} className="flex items-center gap-2">
      <p className="h4 font-bold flex-1">{label}</p>
      <div className="flex text-accent dark:text-primary">
        {Array.from(new Array(Math.floor(value)).keys()).map((i) => (
          <FaStar size={30} key={`skill-${name}-star-${i}`} />
        ))}
        {hasHalf && <FaStarHalfAlt size={30} />}
      </div>
    </li>
  );
};

export default SkillGroupCard;
