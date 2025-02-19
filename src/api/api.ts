import axios from "axios";
import { useModalStore } from "../zustand/modal.store";

const { VITE_BASE_URL } = import.meta.env;

// Axios 인스턴스 생성
export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 쿠키 포함 (httpOnly 사용 시 필요)
});

// 요청 인터셉터: JWT 토큰 추가
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken"); // ✅ `localStorage` 대신 `sessionStorage`
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("🟢 Axios 요청 헤더:", config.headers);
  return config;
});

// 응답 인터셉터: 401 처리 및 재로그인 유도
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      console.warn("401 Unauthorized: 액세스 토큰 만료됨.");

      // ✅ 로그인 모달 오픈 (Zustand 사용)
      useModalStore.getState().openLoginModal();

      // ✅ 서버에 리프레시 토큰 요청 (httpOnly 쿠키 사용)
      try {
        const refreshResponse = await axios.post(
          `${VITE_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );

        if (refreshResponse.data.jwtToken) {
          sessionStorage.setItem("jwtToken", refreshResponse.data.jwtToken);
          error.config.headers.Authorization = `Bearer ${refreshResponse.data.jwtToken}`;
          return api(error.config); // 요청 재시도
        }
      } catch (refreshError) {
        console.error("리프레시 토큰 갱신 실패:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);
