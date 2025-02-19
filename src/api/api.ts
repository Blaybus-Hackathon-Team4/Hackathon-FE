import axios from "axios";
import { useModalStore } from "../zustand/modal.store";

const { VITE_BASE_URL } = import.meta.env;
// axios 인스턴스
export const api = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Axios 인터셉터에서 401 응답을 감지하여 Zustand 상태 변경
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      useModalStore.getState().openLoginModal();
    }
    return Promise.reject(error);
  }
);

// 요청 인터셉터: 액세스 토큰 추가
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
