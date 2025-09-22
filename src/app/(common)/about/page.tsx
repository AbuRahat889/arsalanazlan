import Leadership from "@/components/About/Leadership";
import MissionVission from "@/components/About/MissionVission";
import TrustCompliance from "@/components/About/TrustCompliance";
import Values from "@/components/About/Values";
import Banner from "@/components/ui/Banner";

export default function page() {
  return (
    <div>
      <Banner
        title="About CPD"
        colorTitle="Awards Ltd"
        discription="Leading the global standard for professional certification and training accreditation since 2015."
      />
      <MissionVission />
      <Values />
      <Leadership />
      <TrustCompliance />
    </div>
  );
}
