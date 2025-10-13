import { baseApi } from "./baseApi";

// /* eslint-disable @typescript-eslint/no-explicit-any */

const CertificateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get all verified certificate for user
    getAllVerifiedCertificat: build.query({
      query: ({ page, limit, ...searchParams }) => ({
        url: `/certifications/all`,
        method: "GET",
        params: { page, limit, ...searchParams },
      }),
      providesTags: ["certificate"],
    }),
  }),
});

export const { useGetAllVerifiedCertificatQuery } = CertificateApi;
export default CertificateApi;
