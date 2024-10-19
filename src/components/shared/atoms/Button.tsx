import React from "react";
import { Template } from "@utils/interfaces";
import Link from "next/link";
import { IconType } from "react-icons";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  template: Template;
  href?: string;
  Icon?: IconType;
  type?: "filled" | "outlined";
  target?: string;
}

function Button({
  template,
  href,
  children,
  className,
  Icon,
  type = "outlined",
  target,
  ...props
}: IProps) {
  const getClassName = () => {
    const classNames = [
      "overflow-hidden relative font-bold p-1 rounded-md border-2 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:transition-[width] before:duration-200 hover:before:w-full",
    ];

    switch (template) {
      case "primary": {
        if (type === "outlined")
          classNames.push(
            "border-primary text-primary before:bg-primary hover:text-secondary"
          );
        if (type === "filled")
          classNames.push(
            "border-primary text-secondary bg-primary before:bg-secondary hover:text-primary"
          );
        break;
      }
      case "secondary":
        if (type === "outlined")
          classNames.push(
            "border-secondary text-secondary bg-primary before:bg-secondary hover:text-primary"
          );
        if (type === "filled")
          classNames.push(
            "border-secondary text-primary bg-secondary before:bg-primary hover:text-secondary"
          );
        break;
      case "accent": {
        if (type === "outlined")
          classNames.push(
            "border-accent text-accent bg-primary before:bg-accent hover:text-primary"
          );
        if (type === "filled")
          classNames.push(
            "border-accent text-primary bg-accent before:bg-primary hover:text-accent"
          );
        break;
      }

      default:
        break;
    }

    if (className) classNames.push(className);

    return classNames.join(" ");
  };

  if (href)
    return (
      <Link href={href} target={target}>
        <button className={getClassName()} {...props}>
          <span className="relative z-[1]">{children}</span>
        </button>
      </Link>
    );

  return (
    <button className={getClassName()} {...props}>
      <span className="relative z-[1] flex gap-2 items-center justify-center">
        {Icon && <Icon />}
        {children}
      </span>
    </button>
  );
}
export default Button;
