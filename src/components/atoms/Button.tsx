import { Template } from "@utils/interfaces";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  template: Template;
}

function Button({ template, children, className, ...props }: IProps) {
  const getClassName = () => {
    const classNames = ["relative font-bold p-1 rounded-md before:rounded-md before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:transition-[width] before:duration-200 hover:before:w-full"];

    switch (template) {
      case "primary":
        classNames.push("bg-primary text-secondary before:bg-white")
        break;
      case "secondary":
        classNames.push("bg-secondary text-primary before:bg-white")
        break;

      default:
        break;
    }

    return classNames.join(" ");
  };

  return (
    <button className={getClassName()} {...props}>
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}

export default Button;
