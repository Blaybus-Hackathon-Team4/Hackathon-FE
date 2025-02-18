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
