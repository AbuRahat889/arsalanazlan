"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import Certificate from "@/assets/Certificate.png";
import { motion } from "framer-motion";
import { MediaButton } from "@/components/ui/icon";
import { useParams, useRouter } from "next/navigation";

export default function CertificateDetails() {
  const router = useRouter();
  const params = useParams().id;
  console.log(params);
  return (
    <div className="border border-[#E5E5E5] rounded-lg p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3"
        >
          <div onClick={() => router.back()} className="cursor-pointer">
            <MediaButton type="back" />
          </div>
          Certificate Details
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Certificate Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              {/* Certificate Header */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-gray-900 mb-4"
              >
                Advanced Project Management Workshop
              </motion.p>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6"
              >
                <div>
                  <span className="font-medium">Issued:</span> January 15, 2024
                </div>
                <div>
                  <span className="font-medium">Expires:</span> January 15, 2025
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Certificate Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
                >
                  <Image
                    src={Certificate}
                    alt="Certificate Preview"
                    height={300}
                    width={300}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Verify Certificate */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Verify Certificate
              </p>

              <p className="text-sm text-gray-600 mb-6">
                Scan the QR code below to verify the authenticity of this
                certificate.
              </p>

              {/* QR Code Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 flex justify-center"
              >
                <motion.div
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-blue-600 rounded-xl p-4"
                >
                  <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                    {/* QR Code Placeholder */}
                    <div className="grid grid-cols-8 gap-px w-24 h-24">
                      {Array.from({ length: 64 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-full h-full ${
                            Math.random() > 0.5 ? "bg-black" : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
