import axios from "axios";

let ACCESS_TOKEN = localStorage.getItem("accessToken");
let REFRESH_TOKEN = localStorage.getItem("refreshToken");

const AxiosAuth = axios.create({
  baseURL: "http://ec2-13-125-66-179.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

// 토큰 갱신
const refreshAccessToken = async () => {
  const response = await AxiosAuth.post(`/auth/refresh`, {
    token: REFRESH_TOKEN,
  });
  ACCESS_TOKEN = response.data.token;
  REFRESH_TOKEN = response.data.refreshToken;
  localStorage.setItem("accessToken", ACCESS_TOKEN);
  AxiosAuth.defaults.headers.common["Authorization"] = ACCESS_TOKEN;
};

// 토큰 유효성 검사
AxiosAuth.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      await refreshAccessToken();
      return AxiosAuth(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default AxiosAuth;
