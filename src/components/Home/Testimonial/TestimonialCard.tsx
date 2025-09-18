import Image from "next/image";
import CardImage from "@/assets/testimonials.svg";

interface TestimonialCardProps {
  name: string;
  title: string;
  image?: string;
  rating: number;
  testimonial: string;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-amber-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialCard({
  name,
  title,
  image,
  rating,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg w-full relative">
      {/* Profile Image */}
      <div className="flex justify-center mb-4 relative">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden -top-20 absolute">
          <Image
            src={CardImage || image || "/placeholder.svg"}
            alt={`${name} profile`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mt-16 mb-4">
        <p className="text-xl font-semibold text-textColor mb-1">{name}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <StarIcon key={index} filled={index < rating} />
        ))}
      </div>

      {/* Testimonial */}
      <div className="text-center px-2">
        <p className="text-gray-700 text-sm leading-relaxed font-medium">
          {testimonial}
        </p>
      </div>
    </div>
  );
}
