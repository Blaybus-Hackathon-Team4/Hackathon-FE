import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  isLoggedIn: boolean;
  name: string | null;
  email: string | null;
  profileImg: string | null;
  setLogin: (name: string, email: string, profileImg: string) => void;
  setLogout: () => void;
}

export const useUserStore = create<UserState>()(
  persist<UserState>(
    (set) => ({
      isLoggedIn: !!localStorage.getItem("accessToken"),
      name: null,
      email: null,
      profileImg: null,
      setLogin: (name, email, profileImg) =>
        set({
          isLoggedIn: true,
          name,
          email,
          profileImg,
        }),
      setLogout: () =>
        set({
          isLoggedIn: false,
          name: null,
          email: null,
          profileImg: null,
        }),
    }),
    {
      name: "userStore",
    }
  )
);
