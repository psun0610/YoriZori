import { create } from "zustand";
import { persist } from "zustand/middleware";
import AxiosAuth from "utils/axiosAuth";

interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  nickname: string | null;
  isLogin: boolean;
  login: (accessToken: string, refreshToken: string, nickname: string) => void;
  logout: () => void;
  verifyToken: () => Promise<boolean>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      nickname: null,
      isLogin: false,

      login: (accessToken, refreshToken, nickname) => {
        set({ isLogin: true, accessToken, refreshToken, nickname });
      },

      logout: () => {
        set({
          isLogin: false,
          accessToken: null,
          refreshToken: null,
          nickname: null,
        });
      },

      verifyToken: async () => {
        const { accessToken, logout } = get();
        if (!accessToken) return false;

        try {
          await AxiosAuth.post("/auth/validate", { token: accessToken });
          return true;
        } catch (error) {
          console.error("Token invalid, logging out.");
          logout();
          return false;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: store => ({
        accessToken: store.accessToken,
        refreshToken: store.refreshToken,
        nickname: store.nickname,
        isLogin: store.isLogin,
      }),
    },
  ),
);
