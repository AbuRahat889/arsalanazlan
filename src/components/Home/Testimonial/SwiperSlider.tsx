"use client";

import { testimonials } from "@/constants/TestimonialCardInfo";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const SwiperSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative product-slider mt-10 px-5 md:px-16">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // this is the key: assign refs *after* swiper is initialized
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation!.prevEl = prevRef.current;
            swiper.params.navigation!.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            // re-assign navigation elements & init/update
            if (
              swiper?.params?.navigation &&
              typeof swiper?.params?.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {testimonials?.map((testimonial: any, index: number) => (
          <SwiperSlide key={index} className="py-14">
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#b6b8bc] rounded-full h-10 w-10 flex items-center justify-center z-[3] shadow-lg"
      >
        <IoIosArrowBack className="text-[#141b34] text-2xl" />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#b6b8bc] rounded-full h-10 w-10 flex items-center justify-center z-[3] shadow-lg"
      >
        <IoIosArrowForward className="text-[#141b34] text-2xl" />
      </button>
    </div>
  );
};

export default SwiperSlider;
