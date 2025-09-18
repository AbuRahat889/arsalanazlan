"use client";

import { testimonials } from "@/constants/TestimonialCardInfo";
import { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

interface NavigationOptions {
  prevEl: HTMLElement | null;
  nextEl: HTMLElement | null;
}

const SwiperSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [setSwiperInstance] = useState<any>(null);

  return (
    <div className="relative product-slider mt-10 px-5 md:px-16">
      <Swiper
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 500 }}
        loop={true} // Infinite loop
        speed={900}
        grabCursor={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onBeforeInit={(swiper) => {
          // Bind refs correctly
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
      >
        {testimonials?.map((testimonial: any, index: number) => (
          <SwiperSlide key={index} className="py-14">
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons near the cards */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 bg-[#b6b8bc] rounded-full h-10 w-10 flex items-center justify-center z-[3] shadow-lg"
      >
        <IoIosArrowBack className="text-[#141b34] text-2xl" />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 bg-[#b6b8bc] rounded-full h-10 w-10 flex items-center justify-center z-[3] shadow-lg"
      >
        <IoIosArrowForward className="text-[#141b34] text-2xl" />
      </button>
    </div>
  );
};

export default SwiperSlider;
