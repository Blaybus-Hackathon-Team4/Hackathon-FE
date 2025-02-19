import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;

const StyledDivider = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.colors.gray[100]}; // border를 사용하여 균일한 두께 유지
  margin-top: 18px; // 간격 조정
`;
