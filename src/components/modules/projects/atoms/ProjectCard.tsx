import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { IProject } from "src/datas/projects";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  project: IProject;
}

const ProjectCard = ({ project, ...props }: IProps) => {
  const { href, image, label, technos } = project;

  return (
    <Link href={href} target="_blank">
      <div
        {...props}
        className={`project-card relative flex-1 basis-[500px] rounded-xl overflow-hidden shadow-lg duration-200 hover:shadow-2xl max-w-[600px]`}
      >
        <Image
          src={image}
          alt={label}
          className="rounded-lg aspect-video object-cover duration-200"
          unoptimized
        />

        <div className="absolute left-0 bottom-0 p-1 text-center font-bold text-primary bg-accent/80 w-full">
          <p className="text-2xl">{label}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technos.map((t) => (
              <p
                className="text-secondary bg-primary w-fit h-fit px-2 rounded-lg text-base"
                key={`techno-${t}`}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
