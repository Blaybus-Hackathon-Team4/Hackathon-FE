import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalState {
  // 로그인 팝업창
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  // 예약 진행 중 경고 팝업창
  isReservationModalOpen: boolean;
  openReservationModal: () => void;
  closeReservationModal: () => void;
  // 예약 취소 확인 팝업창
  isCancelModalOpen: boolean;
  openCancelModal: () => void;
  closeCancelModal: () => void;
}

export const useModalStore = create<ModalState>()(
  persist<ModalState>(
    (set) => ({
      isLoginModalOpen: false,
      openLoginModal: () =>
        set({
          isLoginModalOpen: true,
        }),
      closeLoginModal: () =>
        set({
          isLoginModalOpen: false,
        }),
      isReservationModalOpen: false,
      openReservationModal: () =>
        set({
          isReservationModalOpen: true,
        }),
      closeReservationModal: () =>
        set({
          isReservationModalOpen: false,
        }),
      isCancelModalOpen: false,
      openCancelModal: () =>
        set({
          isCancelModalOpen: true,
        }),
      closeCancelModal: () =>
        set({
          isCancelModalOpen: false,
        }),
    }),
    {
      name: "modalStore",
    }
  )
);
