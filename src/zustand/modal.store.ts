import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface ModalState {
  isModalOpen: boolean;
  modalElement: React.ReactElement | null;
  openModal: (element: React.ReactElement) => void;
  closeModal: () => void;
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
      isModalOpen: false,
      modalElement: null,
      openModal: (element: React.ReactElement) =>
        set({ isModalOpen: true, modalElement: element }),
      closeModal: () => set({ isModalOpen: false, modalElement: null }),
    }),
    {
      name: "modalStore",
      storage: sessionStoragePersist, // 세션 스토리지 적용
    }
  )
);
