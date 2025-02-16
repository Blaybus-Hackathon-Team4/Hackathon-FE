import React, { useEffect } from "react";
import axios from "axios";
import {
  PaymentMethod,
  PG,
  PaymentRequest,
  PaymentResponse,
} from "../../../types/portone";

const { VITE_IMP_CODE } = import.meta.env;
// 결제 데이터 타입 정의

const KakaoPayv1: React.FC = () => {
  // 더미 데이터 (사용자 ID 및 선택한 상품)
  const userId = "dummy-user-1234";

  const generateMerchantUid = (): string => {
    return "Heartz-" + Math.random().toString(36).substr(2, 9);
  };

  useEffect(() => {
    // 포트원 라이브러리 추가
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="https://cdn.iamport.kr/v1/iamport.js"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://cdn.iamport.kr/v1/iamport.js";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (script && script.parentNode === document.body) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const onclickPay = (pgValue: PG, payMethod: PaymentMethod): void => {
    // TypeScript에서 window.IMP 객체가 존재하는지 확인 후 실행
    const { IMP } = window;
    IMP?.init(VITE_IMP_CODE);
    const impUid = VITE_IMP_CODE;

    if (!window.IMP) {
      console.error("포트원(IMP) 객체를 찾을 수 없습니다.");
      return;
    }

    const data: PaymentRequest = {
      // param
      pg: pgValue, //PG사구분코드.{사이트코드}, https://developers.portone.io/docs/ko/tip/pg-2
      pay_method: payMethod,
      merchant_uid: generateMerchantUid(),
      name: "컨설팅",
      amount: 100,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      m_redirect_url: "",
    };
    console.log("data:", data);

    IMP?.request_pay(data, async (rsp: PaymentResponse) => {
      if (rsp.success) {
        console.log("결제 성공:", rsp);
        const success = await verifyPayment(data.merchant_uid, impUid);
        if (success) {
          console.log(`결제 성공! 결제 금액: ${rsp.paid_amount}원`);
          console.log(`영수증 URL: ${rsp.receipt_url}`);
        } else {
          console.log("결제 검증 실패");
        }
      } else {
        console.error(`결제 실패! 사유: ${rsp.status}`);
      }
    });
  };

  const verifyPayment = async (
    merchantUid: string,
    impUid: string
  ): Promise<boolean> => {
    try {
      const response = await axios.post(
        `/verify/${merchantUid}/${userId}/${impUid}`
      );
      return response.data.success;
    } catch (error) {
      console.error("결제 검증 요청 에러:", error);
      return false;
    }
  };

  return (
    <>
      <button onClick={() => onclickPay("kakaopay", "kakaopay")}>
        카카오페이 결제
      </button>
    </>
  );
};

export default KakaoPayv1;
