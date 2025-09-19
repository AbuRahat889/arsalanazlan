import { Awards } from "@/components/Home/Award";
import ChoosePatn from "@/components/Home/ChoosePatn";
import Faqs from "@/components/Home/Faqs";
import Hero from "@/components/Home/Hero";
import SecurityCard from "@/components/Home/SecurityCard";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

export default function page() {
  return (
    <div>
      <Hero />
      <SecurityCard />
      <ChoosePatn />
      <Awards />
      <Testimonial />
      <Faqs />
    </div>
  );
}
