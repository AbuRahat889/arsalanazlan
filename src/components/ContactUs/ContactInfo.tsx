"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MediaButton } from "../ui/icon";

export default function ContactInfo() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="p-6 border-2 border-borderColor rounded-lg shadow-[0_0_40px_0_rgba(237,144,12,0.08)]"
    >
      <h1 className="text-2xl font-bold leading-7 text-textColor mb-6">
        Contact Information
      </h1>

      {/* email  */}
      <div className="flex items-start gap-3" ref={formRef}>
        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-[#151b27] flex items-center justify-center">
          <MediaButton type="email" />
        </div>
        <div className="truncate">
          <h1 className="text-lg text-textColor font-medium leading-[120%]">
            Email Support
          </h1>
          <p className="text-base font-normal text-secondaryColor leading-normal truncate">
            support@gearshare.com
          </p>
          <p className="text-sm font-normal text-[#6b7280] leading-normal">
            Response within 2 hours
          </p>
        </div>
      </div>

      {/* phone  */}
      <div className="flex items-start gap-3 py-8">
        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-[#151b27] flex items-center justify-center">
          <MediaButton type="phone" />
        </div>
        <div>
          <h1 className="text-lg text-textColor font-medium leading-[120%]">
            Phone Support
          </h1>
          <p className="text-base font-normal text-secondaryColor leading-normal">
            0123456789
          </p>
          <p className="text-sm font-normal text-[#6b7280] leading-normal">
            Mon-Fri, 8am-8pm PST
          </p>
        </div>
      </div>
      {/* office  */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-[#151b27] flex items-center justify-center">
          <MediaButton type="location" />
        </div>
        <div>
          <h1 className="text-lg text-textColor font-medium leading-[120%]">
            Office
          </h1>
          <p className="text-base font-normal text-secondaryColor leading-normal">
            123 Equipment Way Los
          </p>
          <p className="text-sm font-normal text-[#6b7280] leading-normal">
            Angeles, CA 90028
          </p>
        </div>
      </div>
    </motion.div>
  );
}
