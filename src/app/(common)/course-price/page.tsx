import CoursePrice from "@/components/CoursePrice/CoursePrice";
import Heading from "@/components/ui/heading";
import { RxArrowLeft } from "react-icons/rx";

export default function Page() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <div className="flex items-center gap-2 px-0 md:px-28">
        <div>
          <RxArrowLeft className="cursor-pointer size-5" />
        </div>
        <p className="text-secondaryColor text-base font-normal leading-normal">
          Back to Training Provider Directory
        </p>
      </div>
      <Heading
        title="Choose Your Accreditation Package"
        subtitle="Select the perfect plan based on your training volume. All plans include our core accreditation features with flexible pricing to match your needs."
      />

      <CoursePrice />
    </div>
  );
}
