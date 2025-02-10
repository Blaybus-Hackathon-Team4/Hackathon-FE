import axios from "axios";

const BASE_URL = ""; // 여기에 기본 서버 URL 넣어야 함

// axios 인스턴스
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
