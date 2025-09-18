import { Awards } from "@/components/Home/Award";
import ChoosePatn from "@/components/Home/ChoosePatn";
import Hero from "@/components/Home/Hero";
import SecurityCard from "@/components/Home/SecurityCard";

export default function page() {
  return (
    <div>
      <Hero />
      <SecurityCard />
      <ChoosePatn />
      <Awards />
    </div>
  );
}
