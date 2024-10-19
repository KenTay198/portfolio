import React, { InputHTMLAttributes } from "react";
import { IBaseInputProps, InputWrapper } from ".";

const TextInput = ({
  label,
  description,
  error,
  errorMessage,
  ...props
}: IBaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const wrapperProps = {
    label,
    description,
    error,
    errorMessage,
    id: props.id,
    required: props.required,
  };

  return (
    <InputWrapper {...wrapperProps}>
      <input
        className={`bg-primaryAlt p-2 shadow-md rounded-md w-full text-white ${
          error ? "error" : ""
        }`}
        {...props}
      />
    </InputWrapper>
  );
};

export default TextInput;
