import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import exit from "../../assets/icons/exit.svg";

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {title && <Title>{title}</Title>} {/*title이 있을 때만 렌더링 */}
      <CloseButton onClick={() => navigate(-1)}>
        <img src={exitIcon} alt="닫기" />
      </CloseButton>
    </HeaderContainer>
  );
};

export default PageHeader;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; // 좌우 정렬
  align-items: center;
  padding: 16px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%); // 중앙 정렬
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 9px;
  width: 18px;
  height: 18px;
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
