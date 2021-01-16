import axios from "axios";

const axiosinstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosinstance;
