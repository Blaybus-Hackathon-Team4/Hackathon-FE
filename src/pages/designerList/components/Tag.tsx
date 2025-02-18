import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface TagProps {
  type: "field" | "consult";
  children: string;
}

const Tag = ({ type, children }: TagProps) => {
  return <StyledTag type={type}>{children}</StyledTag>;
};

export default Tag;

const StyledTag = styled.span<{ type: "field" | "consult" }>`
  background-color: ${(props) =>
    props.type === "field" ? theme.colors.primary[50] : theme.colors.secondary[50]};
  color: ${(props) =>
    props.type === "field" ? theme.colors.primary[500] : theme.colors.secondary[500]};
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
`;