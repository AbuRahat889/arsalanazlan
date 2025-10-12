import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const ContactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //send message to admin
    sendMessage: build.mutation({
      query: (data) => ({
        url: `/contact/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useSendMessageMutation } = ContactApi;
export default ContactApi;
