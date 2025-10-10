import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //login user
    usersLogin: build.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    //create user
    usersCreate: build.mutation({
      query: (data) => ({
        url: `/auth/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    //verify otp
    usersVerifyOtp: build.mutation({
      query: (data) => ({
        url: `/auth/verify-otp`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    //verify otp resend
    usersVerifyOtpResend: build.mutation({
      query: (data) => ({
        url: `/auth/resend-otp`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    //forgot password
    forgotPassword: build.mutation({
      query: (data) => ({
        url: `/auth/forget-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    //reset password
    resetPassword: build.mutation({
      query: (data) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    //get me
    getMe: build.query({
      query: () => ({
        url: `/auth/get-me`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useUsersLoginMutation,
  useUsersCreateMutation,
  useUsersVerifyOtpMutation,
  useUsersVerifyOtpResendMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,

  useGetMeQuery,
} = AuthApi;
export default AuthApi;
