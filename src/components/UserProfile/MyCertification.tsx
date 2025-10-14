"use client";

import {
  useGetAllApprovedCertificatesQuery,
  useGetMyCertificatesStatusQuery,
} from "@/redux/api/certificateApi";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../ui/Pagination";

type ActivityStatus = "APPROVED" | "REJECTED" | "PENDING";
type CertificateStatus = "active" | "expired";

interface CertificationActivity {
  id: number;
  jobTitle: string;
  certificationLevel: string;
  status: ActivityStatus;
}

interface Certificate {
  id: number;
  jobTitle: string;
  createdAt: string;
  isHidden: boolean;
  status: CertificateStatus;
}

const getActivityUI = (status: ActivityStatus) => {
  switch (status) {
    case "PENDING":
      return {
        bg: "bg-yellow-50 border-yellow-200",
        icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
        label: "PENDING",
        labelClass: "bg-yellow-100 text-yellow-800",
      };
    case "REJECTED":
      return {
        bg: "bg-red-50 border-red-200",
        icon: <X className="w-5 h-5 text-red-600" />,
        label: "REJECTED",
        labelClass: "bg-red-100 text-red-800",
      };
    case "APPROVED":
      return {
        bg: "bg-green-50 border-green-200",
        icon: <Check className="w-5 h-5 text-green-600" />,
        label: "APPROVED",
        labelClass: "bg-green-100 text-green-800",
      };
  }
};

export default function CertificationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCertificatePage, setCurrentCertificatePage] = useState(1);

  //get all my certificate activities
  const { data } = useGetMyCertificatesStatusQuery({
    page: currentPage,
    limit: 5,
  });
  const certificates = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages || 1;

  //get all my approved certificates
  const { data: approvedData } = useGetAllApprovedCertificatesQuery({
    page: currentCertificatePage,
    limit: 5,
  });
  const approvedCertificates = approvedData?.data?.data || [];
  const totalCertificatePages = approvedData?.data?.meta?.totalPages || 1;

  console.log(approvedCertificates);

  const onPageChange = (type: string) => {
    if (type === "prev") {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onCertificatePageChange = (page: number) => {
    setCurrentCertificatePage(page);
  };

  return (
    <div>
      <div className="border border-[#E5E5E5] rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Certification
        </h1>

        {/* Certification Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
        >
          <div className="p-6">
            <p className="text-lg font-medium text-gray-900 mb-6">
              Certification Activities
            </p>

            <div className="space-y-4 ">
              <div className="space-y-4 h-full lg:h-[370px]">
                {certificates?.map(
                  (activity: CertificationActivity, i: number) => {
                    const ui = getActivityUI(activity.status);
                    return (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.4 }}
                        className={`flex items-center justify-between p-4 rounded-lg border ${ui.bg}`}
                      >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                          <div className="flex justify-between w-full md:w-auto">
                            <div className="flex-shrink-0">{ui.icon}</div>
                            <span
                              className={`px-3 py-1 text-sm font-medium rounded-full block md:hidden ${ui.labelClass}`}
                            >
                              {ui.label}
                            </span>
                          </div>

                          <span className="text-gray-900 font-medium text-sm md:text-base">
                            {activity.certificationLevel
                              ? activity.certificationLevel
                                  .charAt(0)
                                  .toUpperCase() +
                                activity.certificationLevel
                                  .slice(1)
                                  .toLowerCase()
                              : ""}{" "}
                            Certification{" "}
                            {activity.certificationLevel === "STANDARD"
                              ? "(SCPD)"
                              : activity.certificationLevel === "FELLOW"
                              ? "(FCPD)"
                              : "(ACPD)"}{" "}
                            {activity.jobTitle}
                          </span>
                        </div>
                        <span
                          className={`px-3 py-1 text-sm font-medium rounded-full hidden md:block ${ui.labelClass}`}
                        >
                          {ui.label}
                        </span>
                      </motion.div>
                    );
                  }
                )}
              </div>
              {totalPages > 1 && (
                <div className="flex items-center justify-end gap-3">
                  <p
                    onClick={() => onPageChange("prev")}
                    className="text-primaryColor cursor-pointer text-sm font-medium mt-2 text-right flex items-center"
                  >
                    {currentPage > 1 && (
                      <>
                        <ChevronLeft className="size-4" /> Prev
                      </>
                    )}
                  </p>
                  <p
                    onClick={() => onPageChange("next")}
                    className="text-primaryColor cursor-pointer text-sm font-medium mt-2 text-right flex items-center "
                  >
                    {currentPage < totalPages && (
                      <>
                        Next
                        <ChevronRight className="size-4" />
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Issued Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <div className="p-6">
            <p className="text-lg font-medium text-gray-900 mb-6">
              Issued Certificates
            </p>

            {approvedCertificates.map((cert: Certificate, i: number) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.01 + 0.01, duration: 0.4 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 4px 40px 6px rgba(237, 144, 12, 0.08), 0 0 4px 0 rgba(116, 116, 116, 0.20)",
                  transition: { duration: 0.2 },
                }}
                className=" rounded-lg p-6 mb-4 duration-300 border"
              >
                <div>
                  <div className="flex items-start md:items-center justify-between w-full">
                    <p className="text-sm md:text-lg font-medium text-gray-900 mb-2">
                      {cert.jobTitle}
                    </p>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        cert.isHidden === false
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {cert.isHidden === false ? "Active" : "Expired"}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Issue Date:{" "}
                        {cert?.createdAt
                          ? new Date(cert?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "2-digit",
                                day: "2-digit",
                                year: "numeric",
                              }
                            )
                          : "No date"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row mt-3  gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-md transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/user-profile/my-certification/certificate-details"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primaryColor text-white text-sm font-medium rounded-md transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            ))}

            {totalCertificatePages > 1 && (
              <Pagination
                currentPage={currentCertificatePage}
                totalPages={totalCertificatePages}
                onPageChange={onCertificatePageChange}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
