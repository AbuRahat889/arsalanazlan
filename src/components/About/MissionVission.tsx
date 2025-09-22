"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mission from "@/assets/mission.png";
import vission from "@/assets/vission.png";
import { BorderBeam } from "./BorderBeam";
import { MediaButton } from "../ui/icon";
import Image from "next/image";
// import { CardHoverEffect } from "@/components/ui/pulse-card";

export default function MissionVission() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className=""
          >
            <div className="flex flex-col-reverse md:flex-row gap-6 mt-10 ">
              <motion.div className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-3xl w-full md:w-[700px] bg-[#fffaed] shadow-security-card-shadow">
                <BorderBeam
                  duration={8}
                  size={300}
                  className="via-[#720008] from-transparent to-transparent"
                />
                <div className="flex items-center gap-3">
                  <div className="bg-[#293650] rounded-lg flex items-center justify-center size-14">
                    <MediaButton type="mission" />
                  </div>
                  <h1 className="text-base md:text-3xl text-textColor font-semibold leading-[120%]">
                    Our Mission
                  </h1>
                </div>
                <p className="text-sm md:text-lg text-secondaryColor font-normal leading-7 py-3">
                  To advance professional excellence globally by providing
                  rigorous, accessible, and internationally recognized
                  certification and accreditation services that drive measurable
                  career and organizational outcomes.
                </p>
                <p className="text-sm md:text-lg text-secondaryColor font-normal leading-7 py-3">
                  We believe that professional development should be continuous,
                  verifiable, and impact. Through our comprehensive framework,
                  we empower individuals and organizations to demonstrate their
                  commitment to excellence and continuous improvement.
                </p>
              </motion.div>
              <motion.div className="h-[200px] md:h-[388px] w-full md:w-[600px] overflow-hidden rounded-xl">
                <Image
                  src={mission}
                  alt="path1"
                  height={500}
                  width={400}
                  className="w-full h-full shadow-security-card-shadow hover:scale-125 transition-transform object-cover duration-1000 ease-in-out"
                />
              </motion.div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-6 mt-10 ">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="h-[200px] md:h-[388px] w-full md:w-[600px] overflow-hidden rounded-xl"
              >
                <Image
                  src={vission}
                  alt="path1"
                  height={500}
                  width={400}
                  className="w-full h-full shadow-security-card-shadow hover:scale-125 transition-transform object-cover duration-1000 ease-in-out"
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-6 backdrop-blur-3xl w-full md:w-[700px] bg-[#fffaed] shadow-security-card-shadow"
              >
                <BorderBeam
                  duration={10}
                  size={300}
                  className="from-transparent via-[#720008] to-transparent"
                  reverse
                />
                <div className="flex items-center gap-3">
                  <div className="bg-[#293650] flex items-center justify-center rounded-lg size-10 md:size-14">
                    <MediaButton type="vission" />
                  </div>
                  <h1 className="text-base md:text-3xl text-textColor font-semibold leading-[120%]">
                    Our Vision
                  </h1>
                </div>
                <p className="text-sm md:text-lg text-secondaryColor font-normal leading-7 py-3">
                  To advance professional excellence globally by providing
                  rigorous, accessible, and internationally recognized
                  certification and accreditation services that drive measurable
                  career and organizational outcomes.
                </p>

                <p className="text-sm md:text-lg text-secondaryColor font-normal leading-7 py-3">
                  We believe that professional development should be continuous,
                  verifiable, and impact. Through our comprehensive framework,
                  we empower individuals and organizations to demonstrate their
                  commitment to excellence and continuous improvement.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* <div ref={valuesRef} className="mb-24">
         

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? "purple"
                        : index === 1
                        ? "blue"
                        : index === 2
                        ? "amber"
                        : "rose"
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
