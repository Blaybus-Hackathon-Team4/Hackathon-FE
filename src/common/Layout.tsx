import { Outlet } from "react-router";
import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = () => {
  return (
    <AppContainer>
      <MobileWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
        <Navbar />
      </MobileWrapper>
    </AppContainer>
  );
};

export default Layout;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececec;
`;

const MobileWrapper = styled.div`
  width: 100%;
  max-width: 480px; /* 최대 모바일 폭 */
  height: 100%;
  max-height: 900px; /* 최대 모바일 높이 */
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const MainContent = styled.main`
  flex: 1;
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 */
`;
