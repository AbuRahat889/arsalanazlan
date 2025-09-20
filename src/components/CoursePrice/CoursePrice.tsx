"use client";

import { buttonVariants } from "@/components/ui/button";
import { CoursePlans } from "@/constants/pricingInfo";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define your plans

export default function CoursePrice() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (val: boolean) => {
    setIsMonthly(val);

    if (!val) {
      // fire confetti when switched to Yearly
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.5, y: 0.5 },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-14">
      <div className="flex justify-center">
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

      <div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 mt-14 ">
        {CoursePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={{
              // only apply y offset on md+ screens
              y:
                plan.isPopular &&
                typeof window !== "undefined" &&
                window.innerWidth >= 765
                  ? -25
                  : index === 0 && window.innerWidth >= 765
                  ? 25
                  : index === 4 && window.innerWidth >= 765
                  ? 25
                  : index === 5 && window.innerWidth >= 765
                  ? 50
                  : 0,
              opacity: 1,
              // only apply x offset on md+ screens
              x:
                window.innerWidth >= 765
                  ? index === 0
                    ? 60
                    : index === 1
                    ? 25
                    : index === 2
                    ? -10
                    : index === 3
                    ? -45
                    : index === 4
                    ? -83
                    : index === 5
                    ? -120
                    : 0
                  : 0,
              // only scale on md+ screens
              scale: window.innerWidth >= 768 ? 0.99 : 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `bg-[#f1f5f9] relative rounded-2xl border-[1px] p-6 text-center lg:flex lg:flex-col lg:justify-center shadow-custom-shadow`,
              plan.isPopular ? "border-primaryColor border-2" : "border-border",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 3
                ? "z-40"
                : index === 4
                ? "z-30"
                : index === 5
                ? "z-0 translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] transform"
                : "z-50",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="bg-primaryColor absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl px-2 py-0.5">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col mt-5">
              <p className="text-muted-foreground text-base font-semibold">
                {plan.name}
              </p>
              <p className="text-muted-foreground mt-6 text-xs leading-5">
                {plan.description}
              </p>
              <p className="text-primaryColor text-sm leading-normal mt-5">
                {plan.traningNumber}
              </p>
              <Link
                prefetch={false}
                href={"#"}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "rounded-lg border-none relative w-full gap-2 overflow-hidden text-sm xl:text-base font-semibold tracking-tighter mt-7 py-2",
                  "hover:bg-primaryColor hover:text-primary-foreground transition-all duration-300 ease-out",
                  plan.isPopular
                    ? "bg-primaryColor text-primary-foreground py-0 lg:py-6 xl:py-0 "
                    : "bg-white text-foreground"
                )}
              >
                Select Package
              </Link>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-secondaryColor text-3xl font-bold tracking-tight">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
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
                    className="font-variant-numeric: tabular-nums "
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-muted-foreground text-sm leading-6 font-semibold tracking-wide">
                    / {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-5 flex flex-col gap-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="text-[#374151] h-4 w-4 flex-shrink-0" />
                    <span className="text-left text-[#374151] text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
