import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface UseApiResult {
  apiCall: {
    get: <T>(endpoint: string, params?: object) => Promise<T>;
    post: <T>(endpoint: string, data?: object) => Promise<T>;
    put: <T>(endpoint: string, data?: object) => Promise<T>;
    delete: <T>(endpoint: string, params?: object) => Promise<T>;
    patch: <T>(endpoint: string, data?: object) => Promise<T>;
  };
  loading: boolean;
  error: AxiosError | null;
}

const useApi = (): UseApiResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const apiCall = useCallback(
    async <T>(
      method: AxiosRequestConfig["method"],
      endpoint: string,
      data: object = {},
      params: object = {}
    ): Promise<T> => {
      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<T> = await axios({
          method,
          url: endpoint,
          data,
          params,
        });
        setLoading(false);
        return response.data;
      } catch (err) {
        setLoading(false);
        setError(err as AxiosError);
        throw err;
      }
    },
    []
  );

  return {
    apiCall: {
      get: <T>(endpoint: string, params?: object) =>
        apiCall<T>("get", endpoint, {}, params),
      post: <T>(endpoint: string, data?: object) =>
        apiCall<T>("post", endpoint, data),
      put: <T>(endpoint: string, data?: object) =>
        apiCall<T>("put", endpoint, data),
      delete: <T>(endpoint: string, params?: object) =>
        apiCall<T>("delete", endpoint, {}, params),
      patch: <T>(endpoint: string, data?: object) =>
        apiCall<T>("patch", endpoint, data),
    },
    loading,
    error,
  };
};

export default useApi;
