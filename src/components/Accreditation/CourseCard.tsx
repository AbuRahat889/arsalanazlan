import { MapPin, SquarePen, Trash2, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    badge: string;
    learners: string;
    location: string;
    description: string;
    specialties: string[];
    established: number;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  const path = usePathname();
  return (
    <div className="bg-white rounded-2xl p-4 md:p-8 shadow-course-shadow">
      {/* Header with title and badge */}
      <div className="flex items-start gap-5 mb-2">
        <p className="text-base md:text-xl font-bold text-textColor leading-tight">
          {course.title}
        </p>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {course.badge}
        </span>
      </div>

      {/* Stats section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 py-6 md:py-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm text-secondaryColor">{course.learners}</span>
        </div>
        <div className="flex items-center gap-2 text-secondaryColor">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{course.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        {course.description}
      </p>

      {/* Specialties section */}
      <div className="mb-8">
        <p className="text-textColor text-sm font-semibold mb-4">Specialties</p>
        <div className="flex flex-wrap gap-3">
          {course.specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-[#f3f4f6] text-secondaryColor px-3 py-2 rounded-full text-xs"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
      <hr className="py-4" />

      {/* Footer with established date and CTA button */}
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm">
          Established {course.established}
        </span>
        {path === "/user-profile/course" ? (
          <div className="flex items-center gap-3">
            <Link
              href={`/user-profile/add-course?type=edit&id=${course.id}`}
              className="bg-[#e8e8e9] p-2 rounded-full hover:bg-gray-300 cursor-pointer"
            >
              <SquarePen className="size-4" />
            </Link>
            <div className="bg-[#e8e8e9] p-2 rounded-full hover:bg-gray-300 cursor-pointer">
              <Trash2 className="size-4 text-primaryColor" />
            </div>
          </div>
        ) : (
          <Button variant={"default"}>View Course</Button>
        )}
      </div>
    </div>
  );
}
