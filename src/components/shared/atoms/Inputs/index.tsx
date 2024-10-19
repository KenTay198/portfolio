import React, { HTMLAttributes } from "react";

export interface IBaseInputProps {
  label?: string;
  labelClassName?: string;
  divClassName?: string;
  description?: string;
  errorMessage?: string;
  error?: boolean;
}

interface IInputWrapperProps
  extends IBaseInputProps,
    HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  required?: boolean;
  id?: string;
}

export const InputWrapper = ({
  label,
  description,
  error,
  errorMessage,
  children,
  required,
  id,
  labelClassName,
  ...props
}: IInputWrapperProps) => {
  return (
    <div {...props}>
      {label && (
        <label
          className={["text-2xl font-bold", labelClassName].join(" ")}
          htmlFor={id}
        >
          {label}
          {required ? " * " : ""}:
        </label>
      )}
      {description && (
        <p className="italic text-gray-700 text-base">{description}</p>
      )}
      {error && (
        <p className="text-red-500 text-base">
          {errorMessage ?? "Veuillez remplir ce champ correctement."}
        </p>
      )}
      {children}
    </div>
  );
};
