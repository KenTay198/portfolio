import React, { InputHTMLAttributes } from "react";
import { IBaseInputProps, InputWrapper } from ".";

const Checkbox = ({
  label,
  description,
  error,
  errorMessage,
  ...props
}: IBaseInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const wrapperProps = {
    description,
    error,
    errorMessage,
    id: props.id,
    required: props.required,
  };
  return (
    <InputWrapper {...wrapperProps}>
      <input {...props} type="checkbox" />
      {label && <label htmlFor={props.id}>{label}</label>}
    </InputWrapper>
  );
};

export default Checkbox;
