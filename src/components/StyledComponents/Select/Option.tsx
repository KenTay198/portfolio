import { capitalize } from "utils";
import styled from "styled-components";

interface OptionProps {
  value: string;
  label?: string;
  disabled?: Boolean;
  hidden?: Boolean;
  selected?: Boolean;
  onSelect: (value: string) => void;
  optionTheme?: OptionTheme;
}

export interface OptionTheme {
  background_color?: string;
  font_color?: string;
  focus_background_color?: string;
  focus_color?: string;
}

const defaultTheme: OptionTheme = {
  focus_background_color: "#097099",
  focus_color: "white",
};

const OptionContainer = styled.div`
  cursor: pointer;
  padding: 0 2px 2px 2px;
  color: ${({ theme }) => theme.font_color};

  &:hover {
    background-color: ${({ theme }) => theme.focus_background_color};
    color: ${({ theme }) => theme.focus_color};
  }
`;

const Option = ({
  value,
  label,
  disabled,
  hidden,
  selected,
  onSelect,
  optionTheme,
  ...props
}: OptionProps) => {
  return (
    <OptionContainer
      {...props}
      theme={{ ...defaultTheme, ...optionTheme }}
      onClick={() => onSelect(value)}
    >
      {label || value}
    </OptionContainer>
  );
};

export default Option;
