import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import { Process } from "../pages/selectProcess/SelectProcessPage";

interface ReservationState {
  designerId: string | null; // 디자이너 고유 ID
  process: Process | null; // 컨설팅 방식 (대면 or 비대면)
  date: string | null; // 예약 날짜 (예: "2025-02-19")
  time: string | null; // 예약 시간 (예: "11:00:00")
  setDesignerId: (id: string) => void;
  setProcess: (process: Process) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
}

const sessionStoragePersist: PersistStorage<ReservationState> = {
  getItem: (key) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: (key) => {
    sessionStorage.removeItem(key);
  },
};

export const useReservationStore = create<ReservationState>()(
  persist(
    (set) => ({
      designerId: null,
      process: null,
      date: null,
      time: null,
      setDesignerId: (id: string) => set({ designerId: id }),
      setProcess: (process: Process) => set({ process }),
      setDate: (date: string) => set({ date }), // `set`을 호출하도록 수정
      setTime: (time: string) => set({ time }), // `set`을 호출하도록 수정
    }),
    {
      name: "reservationStore",
      storage: sessionStoragePersist, // 세션 스토리지 적용
    }
  )
);
