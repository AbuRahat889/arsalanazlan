import Heading from "../ui/heading";
import CertificationLevel from "./CertificationLevel";

export default function Pricing() {
  return (
    <div className="py-14 container mx-auto px-5 xl:px-0">
      <Heading
        title="Choose Your Certification Level"
        subtitle="Each level is designed to recognize different stages of professional development and expertise."
      />
      <CertificationLevel />
    </div>
  );
}
