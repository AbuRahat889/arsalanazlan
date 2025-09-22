import MissionVission from "@/components/About/MissionVission";
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
    </div>
  );
}
