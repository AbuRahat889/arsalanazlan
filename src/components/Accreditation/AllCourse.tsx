import React from "react";
import Heading from "../ui/heading";
import SearchBar from "./SearchBar";
import CourseCard from "./CourseCard";
import { courses } from "@/constants/coursesInfo";
import { Button } from "../ui/button";

export default function AllCourse() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <Heading
        title="Provider Directory"
        subtitle="Discover world-class training providers that have earned our rigorous accreditation standards. Search by specialty, location, or accreditation level."
      />
      <div className="mt-6">
        <SearchBar />
      </div>
      <p className="text-sm  md:text-base text-secondaryColor max-w-7xl mx-auto py-6">
        Showing <span className="text-primaryColor font-bold">4</span> accredited
        training providers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto ">
        {courses.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="flex justify-center items-center pt-3">
        <Button variant={"outline"}>View All</Button>
      </div>
    </div>
  );
}
