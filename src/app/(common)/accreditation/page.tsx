import AllCourse from "@/components/Accreditation/AllCourse";
import CaseStudies from "@/components/Accreditation/CaseStudies";
import Banner from "@/components/ui/Banner";

export default function page() {
  return (
    <div>
      <Banner
        subtitle="Trusted by 500+ Training Providers"
        title="Accredited Training"
        colorTitle="Provider Directory"
        discription="Discover world-class training providers that have earned our rigorous accreditation standards. Search by specialty, location, or accreditation level."
        button="Apply for Accreditation"
      />
      <AllCourse />
      <CaseStudies />
    </div>
  );
}
