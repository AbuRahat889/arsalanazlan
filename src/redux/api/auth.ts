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
      invalidatesTags: ["user"],
    }),

    //get all user from admin dashboard
    getAllUsers: build.query({
      query: () => ({
        url: `/users/all-users`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    //get me
    getMe: build.query({
      query: () => ({
        url: `/users/me`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    //forgot password
    forgotPassword: build.mutation({
      query: ({ email }) => ({
        url: `/auth/forget-password`,
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAdminLoginMutation,

  useGetAllUsersQuery,
  useGetMeQuery,

  useForgotPasswordMutation,
} = AuthApi;
export default AuthApi;
