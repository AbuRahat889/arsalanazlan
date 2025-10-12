import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const UsersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //send message to admin
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `/users/update-user-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // user logs activity
    // create logs
    createLogs: build.query({
      query: ({ page, limit }) => ({
        url: `/log/my-logs`,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useUpdateUserProfileMutation,
  //user logs activity
  useCreateLogsQuery,
} = UsersApi;
export default UsersApi;
