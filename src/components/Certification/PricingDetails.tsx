"use client";

import { Button } from "@/components/ui/button";
// import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function PricingDetails({ priceDetails }: any) {
  const [isMonthly, setIsMonthly] = useState(true);
  //   const isDesktop = useMediaQuery('(min-width: 768px)');
  console.log(priceDetails, "priceDetails");

  const handleToggle = (val: boolean) => {
    setIsMonthly(val);

    if (!val) {
      // fire confetti when switched to Yearly
      confetti({
        particleCount: 550,
        spread: 200,
        origin: { x: 0.5, y: 0.5 },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.5,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["square", "circle"],
      });
    }
  };

  return (
    <div className="container">
      <div className=" flex justify-center">
        <div className="relative flex items-center bg-[#f9fafb] shadow-custom-shadow rounded-full p-2 w-[290px]">
          {/* Sliding background pill */}
          <div
            className={`absolute h-[85%] w-[133px] bg-primaryColor rounded-full transition-all duration-500`}
            style={{
              transform: isMonthly ? "translateX(0px)" : "translateX(141px)",
            }}
          ></div>

          {/* Options tab */}
          <div className="relative z-10 flex w-full justify-between">
            <button
              onClick={() => handleToggle(true)}
              className={`px-6 py-2 transition duration-300 cursor-pointer truncate ${
                isMonthly ? "text-white" : "text-secondaryColor"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle(false)}
              className={`pr-16 py-2 transition duration-300 cursor-pointer truncate ${
                !isMonthly ? "text-white" : "text-secondaryColor"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.6,
          type: "spring",
          stiffness: 100,
          damping: 30,
          delay: 0.4,
          opacity: { duration: 0.5 },
        }}
      >
        <div
          className={cn(
            " relative h-full w-full md:w-96 mx-auto text-left transition-all hover:shadow-lg p-6 cursor-pointer ease-in-out ",
            "ring-primaryColor/50 dark:shadow-primaryColor/10 shadow-md ring-2 rounded-lg bg-[#fef4e7]"
          )}
        >
          {/* heading  */}
          <div className="">
            <p className={`text-[#76726c] text-xl font-medium leading-[120%]`}>
              {priceDetails.name}
            </p>
            <div className="flex items-end py-7">
              <span className="text-primaryColor text-5xl font-bold ">
                <NumberFlow
                  value={
                    isMonthly
                      ? Number(priceDetails.price)
                      : Number(priceDetails.yearlyPrice)
                  }
                  format={{
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  transformTiming={{
                    duration: 500,
                    easing: "ease-out",
                  }}
                  willChange
                  className="p-0"
                />
              </span>
              {priceDetails.period !== "Next 3 months" && (
                <span className="text-[#76726c] text-xl leading-6 font-semibold">
                  / {priceDetails.period}
                </span>
              )}
            </div>
          </div>

          {/* features list */}

          <div className="grid gap-3 pb-6">
            <p className="text-xl font-semibold leading-normal text-textColorl">
              Included Benefits:
            </p>
            {priceDetails.features.map((feature: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.05,
                }}
                className="flex items-center gap-2 text-sm"
              >
                <div
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full",
                    priceDetails.popular
                      ? "bg-primaryColor/10 text-primaryColor"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span
                  className={
                    priceDetails.popular
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <div>
            <Button
              variant={priceDetails.popular ? "default" : "outline"}
              href={`/payment?plan=${priceDetails.id}&price=${isMonthly ? priceDetails.price : priceDetails.yearlyPrice}`}
              className={cn(
                "w-full font-medium transition-all duration-300",
                priceDetails.popular
                  ? "bg-primaryColor hover:bg-primaryColor/90 hover:shadow-primaryColor/20 hover:shadow-md"
                  : "hover:border-primaryColor/30 hover:bg-primaryColor/5 hover:text-primaryColor"
              )}
            >
              Subscribe to {priceDetails.id}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
