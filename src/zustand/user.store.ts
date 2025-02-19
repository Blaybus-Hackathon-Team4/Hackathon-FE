import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface UserState {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
  setLogin: (name: string, email: string) => void;
  setLogout: () => void;
}

const sessionStoragePersist: PersistStorage<UserState> = {
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

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: !!sessionStorage.getItem("accessToken"),
      name: null,
      email: null,
      setLogin: (name, email) => {
        sessionStorage.setItem("accessToken", "true"); // 로그인 시 세션 스토리지에 토큰 저장
        set({ isLoggedIn: true, name, email });
      },
      setLogout: () => {
        sessionStorage.removeItem("accessToken"); // 로그아웃 시 토큰 삭제
        set({ isLoggedIn: false, name: null, email: null });
      },
    }),
    {
      name: "userStore",
      storage: sessionStoragePersist, // 세션 스토리지 적용
    }
  )
);
