import Option, { OptionTheme } from "./Option";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SelectProps {
  id: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options?: Array<{ value: string; label?: string }>;
  selectTheme?: SelectTheme;
  optionTheme?: OptionTheme;
}

interface SelectTheme {
  width?: string;
  height?: string;
  background_color?: string;
  border_size?: string;
  border_color?: string;
  font_color?: string;
  font_size?: string;
  border_radius?: string;
  transition_duration? : string;
}

const defaultProps: SelectTheme = {
  width: "100px",
  height: "25px",
  border_size: "1px",
  border_color: "black",
  font_color: "inherit",
  font_size: "inherit",
  background_color: "white",
  border_radius: "0",
  transition_duration : "0"
};

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  box-shadow: 0 0 0 ${({ theme }) => theme.border_size}
    ${({ theme }) => theme.border_color};
  border-radius: ${({ theme }) => theme.border_radius};
  width: ${({ theme }) => theme.width};
  height: ${({ theme }) => theme.height};
  background-color: ${({ theme }) => theme.background_color};
  font-size: ${({ theme }) => theme.font_size};
  color: ${({ theme }) => theme.font_color};
  user-select: none;
  padding: 3px;
  margin: 0;
  transition-duration : ${({theme}) => theme.transition_duration};

  .selected-option {
    width: 100%;
    color: inherit;
  }

  .icon-toggler {
    display: flex;
    align-items: center;
    color: inherit;
  }
`;

const OptionWindow = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: ${({ theme }) => theme.width};
  background-color: ${({ theme }) => theme.background_color};
  box-shadow: 0 0 0 ${({ theme }) => theme.border_size}
    ${({ theme }) => theme.border_color};
`;

const Select = ({
  id,
  label,
  value,
  onChange,
  options,
  selectTheme,
  optionTheme,
  ...props
}: SelectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setSelectedValue(value || "");
  }, [value]);

  const theme = { ...defaultProps, ...selectTheme };

  return (
    <>
      {label && <label>{label}</label>}
      <SelectContainer
        {...props}
        theme={theme}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="selected-option">
          {options?.find((option) => selectedValue === option.value)?.label ||
            selectedValue}
        </div>
        <div className="icon-toggler">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isExpanded && (
          <OptionWindow theme={theme}>
            {options &&
              options.map((option, index) => {
                return (
                  <Option
                    key={`select-${id}-option-${index}`}
                    onSelect={(value: string) => handleSelect(value)}
                    optionTheme={{ ...theme, ...optionTheme }}
                    {...option}
                  />
                );
              })}
          </OptionWindow>
        )}
      </SelectContainer>
    </>
  );
};

export default Select;
