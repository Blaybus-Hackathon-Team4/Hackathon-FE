import { GoogleOAuthProvider } from "@react-oauth/google";
import { Link, useLocation } from "react-router";
import styled from "styled-components";
import Login from "../pages/login/components/Login";
import { useUserStore } from "../zustand/user.store";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Navbar = () => {
  const { isLoggedIn } = useUserStore();
  const { pathname }: { pathname: string } = useLocation();

  return (
    <StNav>
      <Button to="/">
        <img
          src={pathname === "/" ? "/home_selected.svg" : "/home.svg"}
          alt="home"
          width={24.96}
          height={24.96}
        />
        <StParagraph isSelected={pathname === "/"}>홈</StParagraph>
      </Button>
      <Button to="/designer-list">
        <img
          src={
            pathname === "/designer-list"
              ? "/search_selected.svg"
              : "/search.svg"
          }
          alt="search"
          width={24.96}
          height={24.96}
        />
        <StParagraph isSelected={pathname === "/designer-list"}>
          탐색
        </StParagraph>
      </Button>
      <Button to="/reservation-history">
        <img
          src={
            pathname === "/reservation-history"
              ? "/calendar_selected.svg"
              : "/calendar.svg"
          }
          alt="calendar"
          width={24.96}
          height={24.96}
        />
        <StParagraph isSelected={pathname === "/reservation-history"}>
          내 예약
        </StParagraph>
      </Button>
      {isLoggedIn ? (
        // 형식적 마이페이지
        <Button to="/my-page">
          <img
            src={pathname === "/my-page" ? "/user_selected.svg" : "/user.svg"}
            alt="mypage"
            width={24.96}
            height={24.96}
          />
          <StParagraph isSelected={pathname === "/my-page"}>마이</StParagraph>
        </Button>
      ) : (
        <GoogleOAuthProvider clientId={clientId}>
          <Login />
        </GoogleOAuthProvider>
      )}
    </StNav>
  );
};

export default Navbar;

const StNav = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 8.32px 24.96px;
  justify-content: space-between;
  width: 480px;
  height: 62.4px;
  z-index: 1000;
  border: 1px solid black;
  background-color: white;
`;

const Button = styled(Link)`
  all: unset; /* 기본 스타일 초기화 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45.76px;
  height: 45.76px;
  gap: 1px;
`;

const StParagraph = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>`
  font-size: 12.48px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.black : theme.colors.gray[300]};
`;
