import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //login user
    adminLogin: build.mutation({
      query: (data) => ({
        url: `/auth/admin/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    //get me
    getMe: build.query({
      query: () => ({
        url: `/users/me`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),

    //forgot password
    forgotPassword: build.mutation({
      query: ({ email }) => ({
        url: `/auth/forget-password`,
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetMeQuery,
  useForgotPasswordMutation,
} = AuthApi;
export default AuthApi;
