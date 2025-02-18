import { create } from "zustand";
import { Process } from "../pages/selectProcess/SelectProcessPage";

interface ReservationState {
  designer: string; // 디자이너 이름
  process: Process; // 컨설팅 방식 (대면 or 비대면)
  date: string; // 예약 날짜 (예: "0218")
  time: string; // 예약 시간 (예: "1300")
}

export const useReservationStore = create<ReservationState>();
