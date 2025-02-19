import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import { Process } from "../pages/selectProcess/SelectProcessPage";

interface ReservationState {
  designerId: string | null; // 디자이너 고유 ID
  process: Process | null; // 컨설팅 방식 (대면 or 비대면)
  date: string | null; // 예약 날짜 (예: "2025-02-19")
  time: string | null; // 예약 시간 (예: "11:00:00")
  name: string | null; // 예약자 이름 추가
  address: string | null; // 예약 장소 추가 (대면 예약 시 필요)
  price: number | null; // 예약 가격 추가
  setDesignerId: (id: string) => void;
  setProcess: (process: Process) => void;
  setDate: (date: string) => void;
  setTime: (time: string) => void;
  setName: (name: string) => void; // 이름 설정 함수 추가
  setAddress: (address: string) => void; // 주소 설정 함수 추가
  setPrice: (price: number) => void; // 가격 설정 함수 추가

  // ✅ 여러 개의 값을 한 번에 설정하는 함수 추가
  setReservationInfo: (info: Partial<ReservationState>) => void;
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
      name: null,
      address: null,
      price: null,
      setDesignerId: (id: string) => set({ designerId: id }),
      setProcess: (process: Process) => set({ process }),
      setDate: (date: string) => set({ date }),
      setTime: (time: string) => set({ time }),
      setName: (name: string) => set({ name }),
      setAddress: (address: string) => set({ address }),
      setPrice: (price: number) => set({ price }),

      // ✅ 여러 값을 한 번에 업데이트하는 함수 추가
      setReservationInfo: (info) =>
        set((state) => ({
          ...state,
          ...info, // 기존 상태를 유지하면서 새로운 값만 덮어쓰기
        })),
    }),
    {
      name: "reservationStore",
      storage: sessionStoragePersist,
    }
  )
);
