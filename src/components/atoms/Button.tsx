import { Template } from "@utils/interfaces";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { IconType } from "react-icons";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  template: Template;
  href?: string;
  Icon?: IconType;
}

function Button({
  template,
  href,
  children,
  className,
  Icon,
  ...props
}: IProps) {
  const getClassName = () => {
    const classNames = [
      "relative font-bold p-1 rounded-md border-2 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:transition-[width] before:duration-200 hover:before:w-full",
    ];

    switch (template) {
      case "primary":
        classNames.push(
          "border-primary text-primary before:bg-primary hover:text-secondary"
        );
        break;
      case "secondary":
        classNames.push(
          "border-secondary text-secondary before:bg-secondary hover:text-primary"
        );
        break;
      case "secondaryAlt":
        classNames.push(
          "border-secondaryAlt text-secondaryAlt before:bg-secondaryAlt hover:text-primary"
        );

        break;

      default:
        break;
    }

    if (className) classNames.push(className);

    return classNames.join(" ");
  };

  if (href)
    return (
      <Link href={href}>
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
