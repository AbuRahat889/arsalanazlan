// src/api/baseApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// Utility function to handle the base API URL
const baseApiHandler = () => {
  // const apiUrl = "http://10.0.20.145:5002/api/v1";
  const apiUrl = "http://206.162.244.142:5017/api/v1";

  return apiUrl;
};

// Define the base API using RTK Query   v
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiHandler(),
    prepareHeaders: (headers) => {
      // const token = (getState() as RootState).auth.token;
      const token = Cookies.get("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "users", "contact"],
});
