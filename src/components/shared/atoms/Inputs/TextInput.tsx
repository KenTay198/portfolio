import React, { InputHTMLAttributes } from "react";
import { IBaseInputProps, InputWrapper } from ".";

const TextInput = ({
  label,
  description,
  error,
  errorMessage,
  divClassName,
  ...props
}: IBaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const wrapperProps = {
    label,
    description,
    error,
    errorMessage,
    id: props.id,
    required: props.required,
    className: divClassName,
  };

  return (
    <InputWrapper {...wrapperProps}>
      <input
        {...props}
        className={`bg-primaryAlt p-2 shadow-md rounded-md w-full text-black ${
          error ? "error" : ""
        }`}
      />
    </InputWrapper>
  );
};

export default TextInput;
