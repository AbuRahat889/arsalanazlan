import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const UsersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get singel user
    getUserById: build.query({
      query: (id) => ({
        url: `/users/single/${id}`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    //send message to admin
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `/users/update-user-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users", "auth"],
    }),

    // user logs activity
    // get all users logs
    getUserLogs: build.query({
      query: ({ page, limit }) => ({
        url: `/log/my-logs`,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["users"],
    }),

    // create logs
    createUsersLogs: build.mutation({
      query: (data) => ({
        url: `/log/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useUpdateUserProfileMutation,
  //user logs activity
  useGetUserLogsQuery,
  useCreateUsersLogsMutation,
} = UsersApi;
export default UsersApi;
