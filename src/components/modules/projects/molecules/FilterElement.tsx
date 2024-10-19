"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { VscTriangleDown, VscTriangleRight } from "react-icons/vsc";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: any;
  children: React.ReactNode;
}

const FilterElement = ({ label, value, children, ...props }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const ExpandIcon = expanded ? VscTriangleRight : VscTriangleDown;

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbarToggler = document.getElementById("navbar-toggler");

    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(target as Node) &&
        navbarToggler &&
        !navbarToggler?.contains(target as Node)
      ) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, setExpanded]);

  return (
    <div {...props} ref={menuRef} className="relative w-fit">
      <div
        className="flex gap-1 items-center cursor-pointer p-2 rounded-lg bg-primary text-secondary dark:bg-secondary dark:text-black"
        onClick={() => setExpanded(!expanded)}
      >
        <p>{label}</p>
        {value && <p> : {value}</p>}
        <ExpandIcon />
      </div>
      {expanded && (
        <div className="absolute top-[110%] left-0 z-[2] p-2 rounded-lg bg-primary text-secondary dark:bg-secondary dark:text-black">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterElement;
