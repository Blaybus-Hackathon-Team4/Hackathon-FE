import { Link, useLocation } from "react-router";
import styled from "styled-components";
import { useUserStore } from "../zustand/user.store";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Calendar from "../../src/assets/icons/calendar.svg";
import SelectedCalendar from "../../src/assets/icons/calendar_selected.svg";
import HomeIcon from "../../src/assets/icons/home.svg";
import SelectedHomeIcon from "../../src/assets/icons/home_selected.svg";
import SearchIcon from "../../src/assets/icons/search.svg";
import SelectedSearchIcon from "../../src/assets/icons/search_selected.svg";
import User from "../../src/assets/icons/user.svg";
import SelectedUser from "../../src/assets/icons/user_selected.svg";
import LoginButton from "../pages/login/components/LoginButton";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Navbar = () => {
  const { isLoggedIn } = useUserStore();
  const { pathname }: { pathname: string } = useLocation();

  return (
    <StNav>
      <Button to="/">
        <img
          src={pathname === "/" ? SelectedHomeIcon : HomeIcon}
          alt="home"
          width={24.96}
          height={24.96}
        />
        <StParagraph isSelected={pathname === "/"}>홈</StParagraph>
      </Button>
      <Button to="/designer-list">
        <img
          src={pathname === "/designer-list" ? SelectedSearchIcon : SearchIcon}
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
            pathname === "/reservation-history" ? SelectedCalendar : Calendar
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
            src={pathname === "/my-page" ? SelectedUser : User}
            alt="mypage"
            width={24.96}
            height={24.96}
          />
          <StParagraph isSelected={pathname === "/my-page"}>마이</StParagraph>
        </Button>
      ) : (
        <GoogleOAuthProvider clientId={clientId}>
          <LoginButton />
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
  max-width: 480px;
  width: 100%;
  height: 62.4px;
  z-index: 1000;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
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
