import Link from "next/link";
import { MediaButton } from "../ui/icon";

type ApplicationModalProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function ApplicationModal({
  setIsModalOpen,
}: ApplicationModalProps) {
  return (
    <div className="p-2">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-28 h-28 bg-[#d9ecd5] rounded-full flex items-center justify-center">
          <MediaButton type="successCheck" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center my-5">
        <h1 className="text-2xl font-semibold text-textColor mb-2">
          Application Submitted Successfully!
        </h1>
        <p className="text-secondaryColor text-sm">
          Thank you! Your application has been submitted. You will receive an
          email confirmation shortly.
        </p>
      </div>

      {/* Subscription Card */}
      <div className="bg-[#e9ecf4] rounded-lg p-6 mb-8">
        <div className="text-center">
          <p className="font-bold text-[#1e3a8a] mb-3">What&apos;s next?</p>

          <div className="text-base text-[#1e3a8a]">
            Our team will review your application within 3-5 business days.
            You&apos;ll receive updates via email at
            certifications@cpdawards.org
          </div>
        </div>
      </div>
      {/* View Dashboard Button */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setIsModalOpen(false)}
          className="w-full bg-[#d9d9d9] text-textColor font-medium py-3 px-4 rounded-lg transition-colors"
        >
          Submit Another Application
        </button>
        <Link
          href={"/user-profile/personal-info"}
          className="w-full bg-primaryColor text-white font-medium text-center py-3 px-4 rounded-lg transition-colors"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
