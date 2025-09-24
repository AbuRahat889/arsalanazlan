"use client";

import { activities } from "@/constants/activityInfo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProviderStatCards() {
  return (
    <div>
      {/* statCards */}
      <div className="flex flex-wrap gap-6">
        {/* Accredited Courses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 flex items-center  gap-12 h-36"
        >
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Accredited Courses
            </p>

            <div className="space-y-3">
              <p className="text-4xl text-textColor font-medium leading-5">
                24
              </p>
            </div>
            <p className="text-sm text-[#16A34A] font-medium leading-5">
              +3 this month
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              d="M3.83301 5H13.833C15.6011 5 17.2968 5.70238 18.5471 6.95262C19.7973 8.20286 20.4997 9.89856 20.4997 11.6667V35C20.4997 33.6739 19.9729 32.4021 19.0352 31.4645C18.0975 30.5268 16.8258 30 15.4997 30H3.83301V5Z"
              stroke="#334155"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.1667 5H27.1667C25.3986 5 23.7029 5.70238 22.4526 6.95262C21.2024 8.20286 20.5 9.89856 20.5 11.6667V35C20.5 33.6739 21.0268 32.4021 21.9645 31.4645C22.9021 30.5268 24.1739 30 25.5 30H37.1667V5Z"
              stroke="#334155"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>

        {/* Learners Enrolled */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 flex items-center  gap-12 h-36"
        >
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Learners Enrolled
            </p>

            <div className="space-y-3">
              <p className="text-4xl text-textColor font-medium leading-5">
                240
              </p>
            </div>
            <p className="text-sm text-[#16A34A] font-medium leading-5">
              +31545 this month
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              d="M27.1663 35V31.6667C27.1663 29.8986 26.464 28.2029 25.2137 26.9526C23.9635 25.7024 22.2678 25 20.4997 25H10.4997C8.73156 25 7.03587 25.7024 5.78563 26.9526C4.53539 28.2029 3.83301 29.8986 3.83301 31.6667V35"
              stroke="#F59E0B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.4997 18.3333C19.1816 18.3333 22.1663 15.3486 22.1663 11.6667C22.1663 7.98477 19.1816 5 15.4997 5C11.8178 5 8.83301 7.98477 8.83301 11.6667C8.83301 15.3486 11.8178 18.3333 15.4997 18.3333Z"
              stroke="#F59E0B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.167 35.0001V31.6668C37.1659 30.1897 36.6743 28.7548 35.7693 27.5873C34.8643 26.4199 33.5972 25.5861 32.167 25.2168"
              stroke="#F59E0B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.167 5.2168C28.601 5.58397 29.8721 6.41797 30.7797 7.58731C31.6874 8.75666 32.1801 10.1948 32.1801 11.6751C32.1801 13.1554 31.6874 14.5936 30.7797 15.7629C29.8721 16.9323 28.601 17.7663 27.167 18.1335"
              stroke="#F59E0B"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>

        {/* Certificates Issued */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-80 flex items-center  gap-12 h-36"
        >
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm text-secondaryColor font-medium leading-5">
              Certificates Issued
            </p>

            <div className="space-y-3">
              <p className="text-4xl text-textColor font-medium leading-5">
                240
              </p>
            </div>
            <p className="text-sm text-[#16A34A] font-medium leading-5">
              +5641 this month
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              d="M20.5 23.334C26.0228 23.334 30.5 18.8568 30.5 13.334C30.5 7.81114 26.0228 3.33398 20.5 3.33398C14.9772 3.33398 10.5 7.81114 10.5 13.334C10.5 18.8568 14.9772 23.334 20.5 23.334Z"
              stroke="#334155"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.2943 21.4824L28.8327 36.6658L20.4993 31.6658L12.166 36.6658L14.7043 21.4824"
              stroke="#334155"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Add Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-3 bg-[#f8f8f8] p-5 rounded-lg border border-[#E4E4E4] w-full md:w-80 mt-6"
      >
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-textColor leading-5">
            Quick Actions
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-5 bg-primaryColor rounded-lg text-sm md:text-base text-textColor font-semibold flex items-center justify-center cursor-pointer"
        >
          <Link href="/user-profile/case-studies/create-case-studies?type=add">
            Submit new training
          </Link>
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
        </div>

        {/* activity card */}

        <div>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex items-center justify-between p-4 rounded-lg border bg-[#f8fafc] my-4"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="flex justify-between w-full md:w-auto">
                  <div className="flex-shrink-0">{activity.icon}</div>
                </div>
                <div>
                  <p className="text-textColor text-base font-medium">
                    {activity.title}
                  </p>
                  <p className="text-[#64748B] font-medium text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
