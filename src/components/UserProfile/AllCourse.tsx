"use client";

import { courses } from "@/constants/coursesInfo";
import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import CourseCard from "../Accreditation/CourseCard";

export default function AllCourses() {
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
            Courses Management
          </h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/user-profile/add-course?type=add"}
              className="bg-orange-500 hover:bg-orange-600 text-xs md:text-sm text-textColor px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <PlusIcon className="text-primary h-5 w-5" />
              Add new training
            </Link>
          </motion.div>
        </motion.div>

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
      </motion.div>
    </div>
  );
}
