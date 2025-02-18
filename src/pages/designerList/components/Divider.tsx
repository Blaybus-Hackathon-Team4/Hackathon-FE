import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;

const StyledDivider = styled.div`
  height: 1px;
  background-color: ${theme.colors.gray[100]};
  //margin: 8px 0;
  margin-top: 20px;
`;