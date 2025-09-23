import profileImage from "@/assets/profile.jpg";
import {
  CameraIcon,
  ClockIcon,
  GraduationCap,
  Lock,
  Mail,
  MapPinIcon,
  PencilIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileSetup() {
  return (
    <div>
      <div className="w-full border border-[#E4E4E4] px-6 py-10 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-base md:text-2xl font-semibold text-gray-900">
            Profile Set Up
          </h1>
          <Link
            href={"/user-profile/edit-profile"}
            className="bg-orange-500 hover:bg-orange-600 text-xs md:text-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <PencilIcon className="w-4 h-4" />
            Edit Profile
          </Link>
        </div>

        {/* Profile Photo Section */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-2 border-primaryColor">
              <Image
                src={profileImage}
                alt="Profile photo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <CameraIcon className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-xl font-semibold text-gray-900 mt-4">
            Mahadi Hasan
          </p>
        </div>

        {/* Profile Information */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="w-5 h-5" />
              <span className="text-secondaryColor">
                mdmahadi36841@email.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Lock className="w-5 h-5" />
              <span>Secondary Education</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPinIcon className="w-5 h-5" />
              <span>Canada</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span>UTC+0 (GMT)</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <GraduationCap className="w-5 h-5" />
              <span>Education</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="border border-[#E4E4E4] p-6 mt-8 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Security</h3>
        <button className="w-full border border-[#E4E4E4] text-gray-700 py-3 px-4 rounded-lg transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );
}
