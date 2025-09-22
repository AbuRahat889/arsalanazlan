import { DirectoryCardInfo } from "@/constants/DirectoryCardInfo";
import Heading from "../ui/heading";
import CertificationSearchBar from "./CertificationSearchBar";
import DirectoryCard from "./DirectoryCard";

export default function ProfessionalDirectory() {
  return (
    <div className="py-14 px-5 xl:px-0">
      <div className="container mx-auto">
        <Heading
          title="Professional Directory"
          subtitle="Browse certified professionals and accredited training providers in our public directory."
        />

        <CertificationSearchBar />
        <div className="mb-5 overflow-x-auto">
          {DirectoryCardInfo.map((card, index) => (
            <DirectoryCard
              key={index}
              name={card.name}
              role={card.role}
              level={card.level}
              status={card.status}
              country={card.country}
              date={card.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
