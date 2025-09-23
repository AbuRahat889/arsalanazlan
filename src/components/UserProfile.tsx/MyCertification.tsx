"use client";

import {
  Download,
  ExternalLink,
  AlertTriangle,
  X,
  Check,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type ActivityStatus = "pending" | "declined" | "approved";
type CertificateStatus = "active" | "expired";

interface CertificationActivity {
  id: number;
  title: string;
  status: ActivityStatus;
}

interface Certificate {
  id: number;
  title: string;
  issueDate: string;
  expiryDate: string;
  status: CertificateStatus;
}

const certificationActivities: CertificationActivity[] = [
  {
    id: 1,
    title: "Standard Certification (SCPD) Evidence Uploaded for All Activities",
    status: "pending",
  },
  {
    id: 2,
    title: "Fellow Certification (FCPD) Evidence Uploaded for All Activities",
    status: "declined",
  },
  {
    id: 3,
    title:
      "Advanced CPD Certification (ACPD) Evidence Uploaded for All Activities",
    status: "approved",
  },
];

const issuedCertificates: Certificate[] = [
  {
    id: 1,
    title: "Advanced CPD Certification (ACPD)",
    issueDate: "15 Jan 2025",
    expiryDate: "15 Jan 2028",
    status: "active",
  },
];

export default function CertificationPage() {
  const getActivityUI = (status: ActivityStatus) => {
    switch (status) {
      case "pending":
        return {
          bg: "bg-yellow-50 border-yellow-200",
          icon: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
          label: "Pending",
          labelClass: "bg-yellow-100 text-yellow-800",
        };
      case "declined":
        return {
          bg: "bg-red-50 border-red-200",
          icon: <X className="w-5 h-5 text-red-600" />,
          label: "Declined",
          labelClass: "bg-red-100 text-red-800",
        };
      case "approved":
        return {
          bg: "bg-green-50 border-green-200",
          icon: <Check className="w-5 h-5 text-green-600" />,
          label: "Approved",
          labelClass: "bg-green-100 text-green-800",
        };
    }
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

            <div className="space-y-4">
              {certificationActivities.map((activity, i) => {
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
                        {activity.title}
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full hidden md:block ${ui.labelClass}`}
                    >
                      {ui.label}
                    </span>
                  </motion.div>
                );
              })}
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

            {issuedCertificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 + 0.7, duration: 0.4 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 4px 40px 6px rgba(237, 144, 12, 0.08), 0 0 4px 0 rgba(116, 116, 116, 0.20)",
                  transition: { duration: 0.2 },
                }}
                className=" rounded-lg p-6 mb-4 duration-300"
              >
                <div>
                  <div className="flex items-start md:items-center justify-between w-full">
                    <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        cert.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {cert.status === "active" ? "Active" : "Expired"}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Issue Date: {cert.issueDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Expiry: {cert.expiryDate}</span>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
