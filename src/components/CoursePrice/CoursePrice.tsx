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

      <div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-6 mt-14">
        {CoursePlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={{
              y: plan.isPopular
                ? -25
                : index === 0
                ? 25
                : index === 4
                ? 25
                : index === 5
                ? 50
                : 0,
              opacity: 1,
              x:
                index === 0
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
                  : 0,
              scale:
                index === 0 ||
                index === 1 ||
                index === 2 ||
                index === 3 ||
                index === 4 ||
                index === 5
                  ? 0.99
                  : 1.0,
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
              `bg-background relative rounded-2xl border-[1px] p-6 text-center lg:flex lg:flex-col lg:justify-center`,
              plan.isPopular ? "border-primary border-2" : "border-border",
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
              <div className="bg-primary absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl px-2 py-0.5">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col">
              <p className="text-muted-foreground text-base font-semibold">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-foreground text-5xl font-bold tracking-tight">
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
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-muted-foreground text-sm leading-6 font-semibold tracking-wide">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-xs leading-5">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4 w-full" />

              <Link
                prefetch={false}
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "hover:bg-primary hover:text-primary-foreground hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="text-muted-foreground mt-6 text-xs leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
