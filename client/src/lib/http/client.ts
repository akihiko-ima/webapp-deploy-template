import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// レスポンス共通エラー処理
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 400) {
      console.error("リクエスト不正", error.response.data);
    }

    if (status === 404) {
      console.error("エンドポイントが存在しません");
    }

    if (status === 500) {
      console.error("サーバー内部エラー");
    }

    return Promise.reject(error);
  },
);
