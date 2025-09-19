import { CheckIcon } from "lucide-react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { MediaButton } from "../ui/icon";

export default function PaymentSuccess() {
  return (
    <div className="">
      <div className="">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-28 h-28 bg-[#d9ecd5] rounded-full flex items-center justify-center">
            <MediaButton type="successCheck" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-semibold text-textColor mb-2">
            Payment Successful!
          </h1>
          <p className="text-secondaryColor text-sm">
            Welcome to CPD Awards. Your subscription is now active.
          </p>
        </div>

        {/* Subscription Card */}
        <div className="bg-[#e9ecf4] rounded-lg p-6 mb-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div>
                <Image src={logo} alt="Logo" width={40} height={40} />
              </div>
              <span className=" text-blue-800 text-sm font-bold ">
                Subscription Activated
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            You now have access to the Standard CPD (SCPD) program
          </p>

          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-medium text-[#1e3a8a]">
                Standard CPD (SCPD)
              </div>
              <div className="text-sm text-[#1e3a8a]">Annual Subscription</div>
            </div>
            <span className="bg-[#43a22c] text-white text-xs px-2 py-1 rounded">
              Active
            </span>
          </div>

          {/* What happens next */}
          <div className="mb-6">
            <p className="font-bold text-[#1e3a8a] mb-3">What happens next?</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#43a22c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    Complete Your Profile
                  </div>
                  <div className="text-xs text-gray-600">
                    Add your professional details, sector, and timeframe
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#43a22c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    Start Logging CPD Activities
                  </div>
                  <div className="text-xs text-gray-600">
                    Record your learning activities and upload evidence
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#43a22c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    Write Your Reflection
                  </div>
                  <div className="text-xs text-gray-600">
                    Complete your personal reflection statement
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-[#43a22c] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    Submit for Review
                  </div>
                  <div className="text-xs text-gray-600">
                    Submit your application once you have your certificate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Profile Button */}
          <button className="w-full bg-primaryColor text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Complete Profile
          </button>
        </div>

        {/* Support Link */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Need help getting started?{" "}
            <a href="#" className="text-primaryColor hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
