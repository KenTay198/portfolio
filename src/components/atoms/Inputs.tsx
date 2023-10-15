import { useEffect, useRef } from "react";
import autosize from "autosize";

interface IProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  error?: boolean;
}

export const Input = ({
  label,
  description,
  error,
  errorMessage,
  ...props
}: IProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      {label && (
        <label className="text-2xl font-bold" htmlFor={props.id}>
          {label}
          {props.required ? " * " : ""}:
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
      <input
        className={`bg-primaryAlt p-2 shadow-md rounded-md w-full text-white ${
          error ? "error" : ""
        }`}
        {...props}
      />
    </div>
  );
};

export const Textarea = ({
  label,
  description,
  error,
  errorMessage,
  ...props
}: IProps & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) autosize(ref.current);
  }, []);

  return (
    <div>
      {label && (
        <label className="text-2xl font-bold" htmlFor={props.id}>
          {label}
          {props.required ? " * " : ""}:
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
      <textarea
        ref={ref}
        className={`bg-primaryAlt p-2 shadow-md rounded-md w-full resize-none text-white ${error}`}
        {...props}
      />
    </div>
  );
};
