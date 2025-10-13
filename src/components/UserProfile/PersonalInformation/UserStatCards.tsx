"use client";

import ApplicationForm from "@/components/Certification/ApplicationForm";
import { MediaButton } from "@/components/ui/icon";
import Modal from "@/components/ui/modal";
import Pagination from "@/components/ui/Pagination";
import { useGetUserLogsQuery } from "@/redux/api/usersApi";
import { UserActivityLog } from "@/Types/ActivityLogs";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function UserStatCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCPDHours, setCPDHours] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [applicationModal, setApplicationModal] = useState(false);
  const { data } = useGetUserLogsQuery({
    page: currentPage,
    limit: 3,
  });

  const activityLogs = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages || 1;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleChange = (value: string, hour: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((i) => i !== value));
      setCPDHours(isCPDHours - hour);
    } else {
      setSelected([...selected, value]);
      setCPDHours(isCPDHours + hour);
    }
  };

  return (
    <div>
      {/* statCards */}
      <div className="flex flex-wrap gap-6">
        {/* CPD Hours */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              CPD Hours
            </p>
            <MediaButton type="clock" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              28/40
            </p>
            <div className="relative bg-[#f5e3c8] w-full h-[15px] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute dark:bg-slate-700 top-0 left-0 bg-primaryColor h-full rounded-full"
              />
            </div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            12 hours remaining
          </p>
        </motion.div>

        {/* Application Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Application Status
            </p>
            <MediaButton type="file" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              Draft
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-32 border-2 border-[#E4E4E4] rounded-lg text-secondaryColor flex items-center justify-center"
            >
              <p>In Progress</p>
            </motion.div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Created 11/15/2024
          </p>
        </motion.div>

        {/* Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Subscription
            </p>
            <MediaButton type="growth2" />
          </div>
          <div className="space-y-3">
            <p className="text-3xl text-textColor font-medium leading-5">
              Active
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 bg-primaryColor rounded-lg text-textColor flex items-center justify-center"
            >
              <p>ACPD</p>
            </motion.div>
          </div>
          <p className="text-sm text-secondaryColor font-medium leading-5">
            Expires 12/15/2025
          </p>
        </motion.div>
      </div>

      {/* Add Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 mt-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-textColor leading-5">
            Quick Actions
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-5 bg-primaryColor rounded-lg text-textColor font-semibold flex items-center justify-center cursor-pointer"
        >
          <Link href="/user-profile/add-log">Add New Log Activity</Link>
        </motion.div>
      </motion.div>

      {/* Activity Log */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-[#f8f8f8] p-5 rounded-lg border-2 border-[#E4E4E4] mt-6"
      >
        <div>
          <p className="text-lg text-textColor font-medium">Activities</p>
          <p className="text-base text-secondaryColor font-normal leading-5">
            Your latest CPD activities and their status
          </p>
        </div>

        {/* activity card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="mt-6 space-y-6"
        >
          {activityLogs?.map((item: UserActivityLog, index: number) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border rounded-lg p-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-card-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.organization}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
                    ${
                      item.status === "APPROVED"
                        ? "bg-green-50 text-green-700"
                        : item.status === "PENDING"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    {item.status}
                  </div>

                  {/* checkbox if status is approved show checkbox */}
                  {item.status === "APPROVED" && (
                    <div className="flex flex-col gap-[10px]">
                      <label className="flex items-center gap-[10px] cursor-pointer">
                        <input
                          type="checkbox"
                          name="checkboxGroup"
                          value={item.id}
                          checked={selected.includes(item.id)}
                          onChange={() => handleChange(item.id, item?.CPDHours)}
                          className="hidden"
                        />
                        <div className="relative">
                          <span
                            className={`${
                              selected.includes(item.id)
                                ? "opacity-100 z-20 scale-[1]"
                                : "opacity-0 scale-[0.4] z-[-1]"
                            } transition-all duration-200 absolute top-0 left-0`}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Group 335">
                                <rect
                                  id="Rectangle 331"
                                  x="-0.00012207"
                                  y="6.10352e-05"
                                  width="20"
                                  height="20"
                                  rx="4"
                                  className="fill-[#ed900c]"
                                  stroke="#ed900c"
                                ></rect>
                                <path
                                  id="Vector"
                                  d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                  fill="white"
                                ></path>
                              </g>
                            </svg>
                          </span>

                          <span
                            className={`${
                              !selected.includes(item.id)
                                ? "opacity-100 z-20 scale-[1]"
                                : "opacity-0 scale-[0.4] z-[-1]"
                            } transition-all duration-200`}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Group 335">
                                <rect
                                  id="Rectangle 331"
                                  x="-0.00012207"
                                  y="6.10352e-05"
                                  width="20"
                                  height="20"
                                  rx="4"
                                  className="fill-transparent "
                                  stroke="#ed900c"
                                ></rect>
                              </g>
                            </svg>
                          </span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.CPDHours} hours
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />

                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                    : "No date"}
                </div>
                <div className="bg-muted px-2 py-1 rounded text-xs">
                  {item.activityCategory}
                </div>
              </div>

              {/* Description */}
              <p className="text-card-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Attachments */}
              <Link
                href={item.documents?.[0] || "/blank"}
                target="_blank"
                className="flex items-center gap-1 text-sm text-muted-foreground"
              >
                <FileText className="w-4 h-4" />
                evidence files attached
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div
          onClick={() => {
            if (isCPDHours && isCPDHours > 0) {
              setApplicationModal(true);
            } else {
              toast.error(
                "Please select at least one activity log to apply for certification."
              );
            }
          }}
          className="p-3 border border-borderColor rounded-xl mt-6 cursor-pointer"
        >
          <p className="text-base text-[#3A3A3A] font-medium text-center">
            Apply Certification
          </p>
        </div>
      </motion.div>

      <Modal
        isModalOpen={applicationModal}
        setIsModalOpen={setApplicationModal}
      >
        <ApplicationForm
          hours={isCPDHours}
          setApplicationModal={setApplicationModal}
        />
      </Modal>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
