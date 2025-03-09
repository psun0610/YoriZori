import axios from "axios";
import { useAuthStore } from "stores/useAuthStore";

const axiosAuth = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosAuth.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// 토큰 갱신
const refreshAccessToken = async () => {
  const { accessToken, refreshToken, login } = useAuthStore.getState();
  const response = await axiosAuth.post(`/auth/refresh`, {
    token: refreshToken,
  });
  login(
    response.data.accessToken,
    response.data.refreshToken,
    response.data.nickname,
  );
  axiosAuth.defaults.headers.common["Authorization"] = accessToken;
};

// 토큰 유효성 검사
axiosAuth.interceptors.response.use(
  response => response,
  async error => {
    const { logout } = useAuthStore.getState();
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      await refreshAccessToken();
      return axiosAuth(originalRequest);
    }
    logout();
    window.location.href = "/loginRequired";
    return Promise.reject(error);
  },
);

export default axiosAuth;
