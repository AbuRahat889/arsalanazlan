import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "@/redux/slices/authSlice";

type Props = {
  setIsModalOpen: (isOpen: boolean) => void;
};
export default function LogOutModal({ setIsModalOpen }: Props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    window.location.href = "/";
    setIsModalOpen(false);
    // Add your logout logic here
  };
  return (
    <div className="pb-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        className="mx-auto mb-6"
      >
        <g clipPath="url(#clip0_253_2242)">
          <path
            d="M93.0975 24.3469C90.5775 15.0713 80.9306 5.4225 71.6531 2.9025C65.9644 1.485 58.3444 0.024375 48 0C37.6556 0.024375 30.0356 1.485 24.3469 2.9025C15.0713 5.4225 5.4225 15.0694 2.9025 24.3469C1.485 30.0356 0.024375 37.6556 0 48C0.024375 58.3444 1.485 65.9644 2.9025 71.6531C5.4225 80.9306 15.0713 90.5775 24.3469 93.0975C30.0356 94.515 37.6594 95.9756 48 96C58.3425 95.9756 65.9644 94.515 71.6531 93.0975C80.9306 90.5775 90.5775 80.9306 93.0975 71.6531C94.515 65.9644 95.9756 58.3406 96 48C95.9756 37.6556 94.515 30.0356 93.0975 24.3469Z"
            fill="#E8E8E7"
          />
          <path
            d="M48 16.125C41.6957 16.125 35.533 17.9944 30.2912 21.4969C25.0494 24.9994 20.9639 29.9776 18.5514 35.802C16.1388 41.6264 15.5076 48.0354 16.7375 54.2185C17.9674 60.4016 21.0032 66.0812 25.461 70.539C29.9188 74.9968 35.5984 78.0326 41.7815 79.2625C47.9647 80.4924 54.3737 79.8612 60.198 77.4487C66.0224 75.0361 71.0006 70.9506 74.5031 65.7088C78.0056 60.467 79.875 54.3043 79.875 48C79.875 39.5462 76.5168 31.4387 70.539 25.461C64.5613 19.4832 56.4538 16.125 48 16.125Z"
            fill="#F1A63D"
          />
          <path
            d="M66.1873 42.7222L47.0192 62.8447C46.4972 63.3928 45.8699 63.83 45.175 64.1299C44.48 64.4299 43.7317 64.5865 42.9748 64.5904H42.9504C42.1979 64.5903 41.4531 64.4393 40.76 64.1462C40.0669 63.8531 39.4397 63.4239 38.9154 62.8841L28.7473 52.4085C28.1943 51.8875 27.7526 51.2599 27.4488 50.5636C27.145 49.8673 26.9854 49.1166 26.9797 48.3569C26.9739 47.5972 27.1221 46.8442 27.4153 46.1434C27.7085 45.4425 28.1406 44.8083 28.6856 44.279C29.2306 43.7497 29.8772 43.3363 30.5863 43.0637C31.2955 42.7912 32.0525 42.6651 32.8117 42.6931C33.5709 42.721 34.3166 42.9025 35.0037 43.2266C35.6909 43.5506 36.3053 44.0105 36.8098 44.5785L42.9036 50.8579L58.0329 34.9691C58.542 34.4337 59.1516 34.0038 59.8268 33.7039C60.502 33.4041 61.2297 33.2401 61.9683 33.2215C62.7068 33.2029 63.4418 33.3299 64.1313 33.5953C64.8208 33.8608 65.4513 34.2594 65.9867 34.7685C66.5221 35.2776 66.952 35.8871 67.2519 36.5623C67.5517 37.2376 67.7156 37.9652 67.7343 38.7038C67.7529 39.4424 67.6259 40.1774 67.3604 40.8669C67.095 41.5564 66.6964 42.1868 66.1873 42.7222Z"
            fill="url(#paint0_linear_253_2242)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_253_2242"
            x1="56.7448"
            y1="53.1229"
            x2="38.4748"
            y2="34.851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDF4EA" />
            <stop offset="0.57" stopColor="#EEF0FC" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <clipPath id="clip0_253_2242">
            <rect width="96" height="96" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>
        <p className="text-3xl font-semibold leading-[120%] text-textColor text-center">
          Log out?
        </p>
        <p className="text-base font-semibold leading-[160%] text-secondaryColor text-center mt-2">
          You’ve been signed out <br /> safely. See you again soon!
        </p>
      </div>
      <div className="flex items-center justify-center gap-6 mt-7">
        <Button
          onClick={() => setIsModalOpen(false)}
          variant="outline"
          className="p-5 w-36"
        >
          No
        </Button>
        <Button onClick={handleLogout} variant="default" className="p-6 w-36">
          Yes
        </Button>
      </div>
    </div>
  );
}
