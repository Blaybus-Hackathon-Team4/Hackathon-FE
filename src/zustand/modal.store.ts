import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface ModalState {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;

  isReservationModalOpen: boolean;
  openReservationModal: () => void;
  closeReservationModal: () => void;

  isCancelModalOpen: boolean;
  openCancelModal: () => void;
  closeCancelModal: () => void;
}

const sessionStoragePersist: PersistStorage<ModalState> = {
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

export const useModalStore = create<ModalState>()(
  persist(
    (set) => ({
      isLoginModalOpen: false,
      openLoginModal: () => set({ isLoginModalOpen: true }),
      closeLoginModal: () => set({ isLoginModalOpen: false }),

      isReservationModalOpen: false,
      openReservationModal: () => set({ isReservationModalOpen: true }),
      closeReservationModal: () => set({ isReservationModalOpen: false }),

      isCancelModalOpen: false,
      openCancelModal: () => set({ isCancelModalOpen: true }),
      closeCancelModal: () => set({ isCancelModalOpen: false }),
    }),
    {
      name: "modalStore",
      storage: sessionStoragePersist, // 세션 스토리지 적용
    }
  )
);
