"use client";
import { IProjectGroup } from "@dictionaries/projects.content";
import React, { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  group?: IProjectGroup;
}

const ProjectGroupInfo = ({ group, ...props }: IProps) => {
  if (!group || !group.Infos) return null;

  const Info = group.Infos;

  return (
    <div {...props}>
      <Info />
    </div>
  );
};

export default ProjectGroupInfo;
