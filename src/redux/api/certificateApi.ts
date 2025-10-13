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

    //apply for certificate with out activity log
    applyForCertificate: build.mutation({
      query: (data) => ({
        url: `/certifications/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["certificate"],
    }),
    //apply for certificate from activity log
    applyCertificateThroughActivity: build.mutation({
      query: (data) => ({
        url: `/certifications/apply-through-activity`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["certificate"],
    }),

    //get my certificates status
    getMyCertificatesStatus: build.query({
      query: ({ page, limit }) => ({
        url: `/certifications/my-certificates`,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["certificate"],
    }),
  }),
});

export const {
  useGetAllVerifiedCertificatQuery,
  useApplyForCertificateMutation,
  useApplyCertificateThroughActivityMutation,

  useGetMyCertificatesStatusQuery,
} = CertificateApi;
export default CertificateApi;
