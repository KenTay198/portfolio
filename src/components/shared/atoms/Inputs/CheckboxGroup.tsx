import React, { InputHTMLAttributes } from "react";
import Checkbox from "./Checkbox";
import { IBaseInputProps, InputWrapper } from ".";

interface ICheckboxGroupProps
  extends IBaseInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  options: { value: string; label: string }[];
  value: string[];
  handleChange: (val: string[]) => void;
}

const CheckboxGroup = ({
  label,
  description,
  error,
  errorMessage,
  options,
  value,
  handleChange,
  ...props
}: ICheckboxGroupProps) => {
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
      <div className="flex flex-col">
        {options.map(({ label, ...option }) => {
          return (
            <Checkbox
              {...props}
              id={`${props.id}-option-${option.value}`}
              key={`${props.id}-option-${option.value}`}
              label={label}
              checked={value.includes(option.value)}
              onChange={(e) => {
                const { checked } = e.target;
                handleChange(
                  checked
                    ? [...value, option.value]
                    : value.filter((e) => e !== option.value)
                );
              }}
            />
          );
        })}
      </div>
    </InputWrapper>
  );
};

export default CheckboxGroup;
