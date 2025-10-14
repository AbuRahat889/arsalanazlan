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

    //update user profile
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `/users/update-user-profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users", "auth"],
    }),

    //update accreditation profile
    updateAccreditationProfile: build.mutation({
      query: (data) => ({
        url: `/users/update-accreditation-profile`,
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
  useUpdateAccreditationProfileMutation,
  //user logs activity
  useGetUserLogsQuery,
  useCreateUsersLogsMutation,
} = UsersApi;
export default UsersApi;
