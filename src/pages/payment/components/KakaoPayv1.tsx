import React, { useEffect } from "react";
import axios from "axios";
import {
  PaymentMethod,
  PG,
  PaymentRequest,
  RequestPayResponse,
} from "../../../types/portone";

const { VITE_IMP_CODE } = import.meta.env;
// 결제 데이터 타입 정의

export const addPortoneLib = () => {
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
};

export const generateMerchantUid = (): string => {
  return "Heartz-" + Math.random().toString(36).substr(2, 9);
};

export const onclickPay = async (
  pgValue: PG,
  payMethod: PaymentMethod
): Promise<number> => {
  const { IMP } = window;
  if (!IMP) {
    console.error("포트원(IMP) 객체를 찾을 수 없습니다.");
    return 500; // 서버 에러 코드 반환
  }

  IMP.init(VITE_IMP_CODE); // 포트원 초기화

  const data: PaymentRequest = {
    pg: pgValue,
    pay_method: payMethod,
    merchant_uid: generateMerchantUid(),
    name: "헤르츠 컨설팅",
    amount: 30000,
    buyer_email: "ksh123@gmail.com",
    buyer_name: "김서현",
    m_redirect_url: "",
  };

  console.log("data:", data);

  return new Promise((resolve) => {
    IMP.request_pay(data, async (response: RequestPayResponse) => {
      if (!response.success) {
        console.error(`결제 실패! 사유: ${response.status}`);
        resolve(400); // 실패 코드 반환
        return;
      }

      console.log("결제 성공:", response);

      // 결제 검증 요청
      try {
        const verifyResponse = await axios.post(`/pay/portone`, {
          imp_uid: response.imp_uid,
          merchant_uid: response.merchant_uid,
        });

        if (verifyResponse.data.success) {
          console.log(`결제 검증 성공! 결제 금액: ${response.paid_amount}원`);
          console.log(`영수증 URL: ${response.receipt_url}`);
          resolve(200); // 성공 코드 반환
        } else {
          console.error("결제 검증 실패");
          resolve(500); // 검증 실패 코드 반환
        }
      } catch (error) {
        console.error("결제 검증 요청 에러:", error);
        resolve(500); // 서버 에러 코드 반환
      }
    });
  });
};

const KakaoPayv1: React.FC = () => {
  useEffect(() => {
    // 포트원 라이브러리 추가
    addPortoneLib();
  }, []);

  return (
    <>
      <p>결제중</p>
    </>
  );
};

export default KakaoPayv1;
