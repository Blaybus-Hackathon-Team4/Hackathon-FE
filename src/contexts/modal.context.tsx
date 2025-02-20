import { createContext, ReactNode } from "react";
import { useModalStore } from "../zustand/modal.store";

interface ModalContextValue {
  openModal: (element: React.ReactElement) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const { isModalOpen, modalElement, openModal, closeModal } = useModalStore();

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
      {isModalOpen && modalElement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          id="modal"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {modalElement}
            <button className="mt-4 text-red-500" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
