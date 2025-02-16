import { createBrowserRouter } from "react-router";
import Layout from "../common/Layout";
import ConfirmationPage from "../pages/confirmation/ConfirmationPage";
import DesignerDetailPage from "../pages/designerDetail/DesignerDetailPage";
import DesignerListPage from "../pages/designerList/DesignerListPage";
import MainPage from "../pages/main/MainPage";
import MyPage from "../pages/mypage/MyPage";
import PaymentPage from "../pages/payment/PaymentPage";
import ReservationHistoryPage from "../pages/reservationHistory/ReservationHistoryPage";
import SelectDatePage from "../pages/selectDate/SelectDatePage";

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
        path: "/confirmation",
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
    ],
  },
]);

export default router;
