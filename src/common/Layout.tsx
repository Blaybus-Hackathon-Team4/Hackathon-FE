import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

// 데스크톱 화면이 우선인지, 모바일 화면이 우선인지에 따라 헤더 또는 네비게이션 바 하나 없애기
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
};

export default Layout;
