import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "./Navbar";
import LoginModal from "../pages/login/components/LoginModal";

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
  padding-bottom: 62.4px; /* Navbar 높이만큼 여백 추가 */
  position: relative;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;
