"use client";

import profileImage from "@/assets/profile.jpg";
import {
  ClockIcon,
  GlobeIcon,
  GraduationCap,
  Lock,
  Mail,
  MapPinIcon,
  PencilIcon,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useGetUserByIdQuery } from "@/redux/api/usersApi";
import ProfileSetupSkeleton from "../Skletone/ProfileSetupSkeleton";

export default function ProfileSetup() {
  //get user data
  const userInfo = useSelector((state: RootState) => state.auth.user);
  const { data, isLoading } = useGetUserByIdQuery(userInfo?.id, {
    skip: !userInfo?.id,
  });

  const profileData = data?.data;

  if (isLoading) {
    return <ProfileSetupSkeleton />;
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full border border-[#E4E4E4] px-6 py-10 rounded-lg"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-base md:text-2xl font-semibold text-gray-900">
            Profile Set Up
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/user-profile/profile-set-up/edit-profile"}
              className="bg-orange-500 hover:bg-orange-600 text-xs md:text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <PencilIcon className="w-4 h-4" />
              Edit Profile
            </Link>
          </motion.div>
        </motion.div>

        {/* Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-2 border-primaryColor">
            <Image
              src={profileData?.profileImage || profileImage}
              alt="Profile photo"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          {userInfo?.role === "USER_PROFILE" ? (
            <p className="text-xl font-semibold text-gray-900 mt-4">
              {profileData?.profile?.firstName} {profileData?.profile?.lastName}
            </p>
          ) : (
            <p className="text-xl font-semibold text-gray-900 mt-4">
              {profileData?.profile?.organizationName}
            </p>
          )}
        </motion.div>

        {/* Profile Information */}
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
          className="flex flex-col md:flex-row items-start gap-4 md:gap-10 mb-10"
        >
          <div className="space-y-4">
            {[
              { icon: Mail, text: profileData?.email || "No Email" },
              userInfo?.role === "USER_PROFILE"
                ? {
                    icon: Lock,
                    text:
                      profileData?.profile?.specialization ||
                      "No Specialization",
                  }
                : {
                    icon: Phone,
                    text:
                      profileData?.profile?.phoneNumber || "No Specialization",
                  },
              {
                icon: MapPinIcon,
                text: profileData?.profile?.country || "No Country",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3 text-gray-600"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-secondaryColor">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {[
              {
                icon: ClockIcon,
                text: profileData?.profile?.timezone || "No Timezone",
              },

              userInfo?.role === "USER_PROFILE"
                ? {
                    icon: GraduationCap,
                    text:
                      profileData?.profile?.professionalSector ||
                      "No Job Title",
                  }
                : {
                    icon: GlobeIcon,
                    text: profileData?.profile?.website || "www.example.com",
                  },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3 text-gray-600"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Security Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border border-[#E4E4E4] p-6 mt-8 rounded-lg w-full"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Security</h3>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={"/user-profile/profile-set-up/change-password"}
            className="w-full inline-block text-center text-lg font-semibold border border-[#E4E4E4] text-gray-700 py-3 px-4 rounded-lg "
          >
            Change Password
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
