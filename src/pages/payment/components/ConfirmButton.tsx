import React, { useEffect } from "react";
import styled from "styled-components";
import { IrequestData } from "../PaymentPage";
import { api } from "../../../api/api";
import { addPortoneLib, onclickPay } from "./KakaoPayv1";
import { useNavigate } from "react-router";
import { useReservationStore } from "../../../zustand/reservation.store";

interface ConfirmButtonProps {
  selectedMethod: "KAKAO" | "BANK";
  reservationInfo: IrequestData;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  selectedMethod,
  reservationInfo,
}) => {
  //const { process, price } = useReservationStore();

  const navigate = useNavigate();
  useEffect(() => {
    // 포트원 라이브러리 추가
    try {
      addPortoneLib();
    } catch (error) {
      console.error("포트원 라이브러리 로드 실패:", error);
    }
  }, []);

  const navigateConfirmationPage = () => {
    navigate(
      `/confirmation/${selectedMethod.toLocaleLowerCase()}/${
        reservationInfo.reservationId
      }`,
      {
        state: reservationInfo,
      }
    );
  };
  const handlePayment = async () => {
    if (selectedMethod === "BANK") {
      console.log("계좌 결제 진행");
      //결제 요청
      postReservationAdditional(reservationInfo);
    } else if (selectedMethod === "KAKAO") {
      console.log("카카오페이 결제 진행");
      //카카오페이 결제 진행

      const resultCode = await onclickPay("kakaopay", "kakaopay");

      if (resultCode === 200) {
        console.log("결제 성공!");
        alert("결제가 완료되었습니다.");

        // -> 성공시 추가정보 전송
        postReservationAdditional(reservationInfo);
      } else if (resultCode === 400) {
        console.log("결제 실패 또는 검증 실패");
        alert("결제에 실패했습니다. 다시 시도해주세요.");
      } else {
        console.log("카카오페이 결제는 성공 서버 오류");
        navigateConfirmationPage();
      }
    }
  };

  const postReservationAdditional = async (reservationInfo: IrequestData) => {
    try {
      console.log("서버로 보내는 정보:", reservationInfo);
      const response = await api.post(
        "/reservation/reservationadditonal",
        reservationInfo
      );
      console.log("예약 추가정보 전송 성공:", response.data);

      navigateConfirmationPage();
      return response.data;
    } catch (error) {
      console.error("예약 추가 요청 실패:", error);

      navigateConfirmationPage();
      throw error;
    }
  };

  return (
    <BottomContainer>
      <Button onClick={handlePayment}>동의하고 결제하기</Button>
    </BottomContainer>
  );
};

export default ConfirmButton;

const BottomContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;

  left: 50%;
  bottom: 0;
  transform: translateX(-50%); /* 중앙 정렬 */
  background-color: white;
  padding: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
