import autosize from "autosize";
import React, { InputHTMLAttributes, useRef, useEffect } from "react";
import { IBaseInputProps, InputWrapper } from ".";

const TextareaInput = ({
  label,
  description,
  error,
  errorMessage,
  ...props
}: IBaseInputProps & InputHTMLAttributes<HTMLTextAreaElement>) => {
  const wrapperProps = {
    label,
    description,
    error,
    errorMessage,
    id: props.id,
    required: props.required,
  };
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) autosize(ref.current);
  }, []);

  return (
    <InputWrapper {...wrapperProps}>
      <textarea
        ref={ref}
        className={`bg-primaryAlt p-2 shadow-md rounded-md w-full resize-none text-white ${error}`}
        {...props}
      />
    </InputWrapper>
  );
};

export default TextareaInput;
