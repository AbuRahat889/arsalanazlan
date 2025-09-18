"use client";

import { motion } from "framer-motion";
import { MediaButton } from "../ui/icon";
import CircuitBoard from "./CircuitBoard";

const Hero = () => {
  return (
    <CircuitBoard>
      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full text-center container mx-auto px-5 py-10 md:py-0 lg:lg:px-0 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-2 px-6 bg-[#3c3e45] rounded-full mb-4 flex items-start md:items-center gap-2"
        >
          <MediaButton type="badge" />
          <p className="text-primaryColor text-xs md:text-sm font-normal leading-normal">
            ISO Certified • Blockchain Verified • Globally Recognized
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl lg:text-6xl font-semibold leading-normal lg:leading-[50px]"
        >
          Advance Your <span className="text-primaryColor">Professional</span>{" "}
          Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white max-w-[800px] mt-3 md:mt-6 text-sm md:text-lg"
        >
          Get globally recognized certification or accredit your training
          programs with our trusted standards for professional development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center flex-col md:flex-row gap-3 justify-center md:gap-6 mt-4 md:mt-12"
        >
          <button className="bg-primaryColor px-3 md:px-5 py-2 md:py-3 border border-primaryColor rounded-lg flex items-center gap-2 text-base group text-textColor">
            <MediaButton type="earn" />
            Earn Certification
          </button>
          <button className="border-2 border-primaryColor text-primaryColor px-3 md:px-5 py-2 md:py-3 rounded-lg flex items-center gap-2 text-[1rem] group">
            <MediaButton type="browse" />
            Browse Templates
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white max-w-[800px] mt-10 md:mt-[64px] mb-3 md:mb-10 text-base md:text-lg">
            Trusted by professionals worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-9 lg:gap-14">
            <div>
              <p className="text-base md:text-2xl text-primaryColor font-bold leading-8">
                15,000+
              </p>
              <p className=" text-white mt-3 text-sm md:text-lg">
                Certified Professionals
              </p>
            </div>
            <div>
              <p className="text-base md:text-2xl text-primaryColor font-bold leading-8">
                500+
              </p>
              <p className="text-white   mt-3 text-sm md:text-lg">
                Accredited Providers
              </p>
            </div>
            <div>
              <p className="text-base md:text-2xl text-primaryColor font-bold leading-8">
                85+
              </p>
              <p className="text-white   mt-3 text-sm md:text-lg"> Countries</p>
            </div>
            <div>
              <p className="text-base md:text-2xl text-primaryColor font-bold leading-8">
                99.8%
              </p>
              <p className="text-white   mt-3 text-sm md:text-lg">
                Verification Accuracy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </CircuitBoard>
  );
};

export default Hero;
