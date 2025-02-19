import { createBrowserRouter } from "react-router";
import Layout from "../common/Layout";
import ConfirmationPage from "../pages/confirmation/ConfirmationPage";
import DesignerDetailPage from "../pages/designerDetail/DesignerDetailPage";
import DesignerListPage from "../pages/designerList/DesignerListPage";
import GoogleOAuthPage from "../pages/login/GoogleOAuthPage";
import MainPage from "../pages/main/MainPage";
import MyPage from "../pages/mypage/MyPage";
import KakaoPayv1 from "../pages/payment/components/KakaoPayv1";
import PaymentPage from "../pages/payment/PaymentPage";
import ReservationHistoryPage from "../pages/reservationHistory/ReservationHistoryPage";
import SelectDatePage from "../pages/selectDate/SelectDatePage";
import SelectProcessPage from "../pages/selectProcess/SelectProcessPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/designer-list",
        element: <DesignerListPage />,
      },
      {
        path: "/designer-detail/:designerId",
        element: <DesignerDetailPage />,
      },
      {
        path: "/select-process",
        element: <SelectProcessPage />,
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
        path: "/confirmation/:method",
        element: <ConfirmationPage />,
      },
      {
        path: "/reservation-history",
        element: <ReservationHistoryPage />,
      },
      {
        path: "/my-page",
        element: <MyPage />,
      },
      {
        path: "/oauth/callback",
        element: <GoogleOAuthPage />,
      },
    ],
  },
]);

export default router;
