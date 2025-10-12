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
  }),
});

export const { useUpdateUserProfileMutation } = UsersApi;
export default UsersApi;
