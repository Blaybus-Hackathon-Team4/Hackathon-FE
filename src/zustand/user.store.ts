import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
  setLogin: (name: string, email: string) => void;
  setLogout: () => void;
}

export const useUserStore = create<UserState>()(
  persist<UserState>(
    (set) => ({
      isLoggedIn: !!localStorage.getItem("accessToken"),
      name: null,
      email: null,
      setLogin: (name, email) =>
        set({
          isLoggedIn: true,
          name,
          email,
        }),
      setLogout: () =>
        set({
          isLoggedIn: false,
          name: null,
          email: null,
        }),
    }),
    {
      name: "userStore",
    }
  )
);
