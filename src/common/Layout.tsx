import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <StWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Navbar />
    </StWrapper>
  );
};

export default Layout;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 높이 확보 */
`;

const ContentWrapper = styled.main`
  flex: 1; /* 남은 공간 차지 */
  padding-bottom: 62.4px; /* Navbar 높이만큼 아래 여백 추가 */
`;
