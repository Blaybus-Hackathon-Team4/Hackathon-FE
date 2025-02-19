import styled from "styled-components";

import { useNavigate } from "react-router";
import BackIcon from "../../../assets/icons/back.svg";

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <HeaderBar>
      <img src={BackIcon} alt="back" onClick={() => navigate(-1)} />
    </HeaderBar>
  );
};

export default BackHeader;

const HeaderBar = styled.header`
  height: 48px;
  padding: 12px 16px;
`;
