"use client";

import { courses } from "@/constants/coursesInfo";
import { motion } from "framer-motion";
import Heading from "../ui/heading";
import { MovingButton } from "../ui/moving-border";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";

export default function AllCourse() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <Heading
        title="Provider Directory"
        subtitle="Discover world-class training providers that have earned our rigorous accreditation standards. Search by specialty, location, or accreditation level."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6"
      >
        <SearchBar />
      </motion.div>
      <p className="text-sm  md:text-base text-secondaryColor max-w-7xl mx-auto py-6">
        Showing <span className="text-primaryColor font-bold">4</span>{" "}
        accredited training providers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {courses.slice(0, 4).map((course, index) => (
          <motion.div
            key={course.id}
            initial={{
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
          >
            <CourseCard course={course} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-6">
        <MovingButton
          borderRadius="1.75rem"
          className=" text-sm rounded-full text-primaryColor px-2 py-2 md:text-base font-normal "
        >
          View All
        </MovingButton>
      </div>
    </div>
  );
}
