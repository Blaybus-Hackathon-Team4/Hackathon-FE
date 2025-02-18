import axios from "axios";

const API_BASE_URL = "https://your-backend-url.com"; // 백엔드 URL (실제 서버 주소 입력 필요)

export const cancelPayment = async (paymentId: string, token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/pay/cancel`, 
      { paymentId }, // 요청 본문에 paymentId 포함
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 포함 (필요한 경우)
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("결제 취소 실패:", error);
    throw error;
  }
};