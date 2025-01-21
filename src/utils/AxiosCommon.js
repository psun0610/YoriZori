import axios from "axios";

const AxiosCommon = axios.create({
  // baseURL: "http://ec2-13-125-66-179.ap-northeast-2.compute.amazonaws.com:8080",
  baseURL: "http://localhost:8080",
});

export default AxiosCommon;
