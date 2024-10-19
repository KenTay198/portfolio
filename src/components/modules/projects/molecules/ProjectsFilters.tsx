"use client";
import projects from "@datas/projects";
import React, { HTMLAttributes } from "react";
import FilterElement from "./FilterElement";
import CheckboxGroup from "@atoms/Inputs/CheckboxGroup";

export interface IProjectsFilters {
  technos?: string[];
  types?: string[];
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  filters: IProjectsFilters;
  handleChange: (val: IProjectsFilters) => void;
}

const ProjectsFilters = ({ filters, handleChange, ...props }: IProps) => {
  const distinctTechnos = [
    ...Array.from(new Set(projects.flatMap(({ technos }) => technos))).map(
      (t) => ({ value: t, label: t })
    ),
  ];
  const types = [
    { value: "Full-Stack", label: "Full-Stack" },
    { value: "Front", label: "Front" },
    { value: "Back", label: "Back" },
  ];

  const { technos } = filters;

  const handleFiltersChange = (key: keyof IProjectsFilters, value: any) => {
    handleChange({ ...filters, [key]: value });
  };

  return (
    <div {...props} className="mb-5 flex flex-wrap gap-2">
      <FilterElement label="Technologies" value={technos?.join(", ")}>
        <CheckboxGroup
          id="technologies"
          options={distinctTechnos}
          className="mr-2"
          value={technos || []}
          handleChange={(values) => handleFiltersChange("technos", values)}
        />
      </FilterElement>
      <FilterElement label="Type" value={filters.types?.join(", ")}>
        <CheckboxGroup
          id="types"
          options={types}
          divClassName="w-[100px]"
          className="mr-2"
          value={filters.types || []}
          handleChange={(values) => handleFiltersChange("types", values)}
        />
      </FilterElement>
    </div>
  );
};

export default ProjectsFilters;
