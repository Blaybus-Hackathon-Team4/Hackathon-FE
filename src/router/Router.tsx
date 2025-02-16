import { createBrowserRouter } from "react-router";
import Layout from "../common/Layout";
import ConfirmationPage from "../pages/confirmation/ConfirmationPage";
import DesignerDetailPage from "../pages/designerDetail/DesignerDetailPage";
import DesignerListPage from "../pages/designerList/DesignerListPage";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import PaymentPage from "../pages/payment/PaymentPage";
import ReservationHistoryPage from "../pages/reservationHistory/ReservationHistoryPage";
import SelectDatePage from "../pages/selectDate/SelectDatePage";
import { KakaoPayTest } from "../pages/payment/components/KakaoPayTest";
import KakaoPayv1 from "../pages/payment/components/KakaoPayv1";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      // 자체 회원가입 페이지 필요하면 만들고, 오직 구글 로그인만 필요하면 만들지 않아도 됨
      // {
      //   path: "/sign-up",
      //   element: <SignUpPage />,
      // },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/designer-list",
        element: <DesignerListPage />,
      },
      {
        path: "/designer-detail",
        element: <DesignerDetailPage />,
      },
      {
        path: "/select-date",
        element: <SelectDatePage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/kakao",
        element: <KakaoPayv1 />,
      },
      {
        path: "/confirmation",
        element: <ConfirmationPage />,
      },
      {
        path: "/reservation-history",
        element: <ReservationHistoryPage />,
      },
    ],
  },
]);

export default router;
