"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants/pricingInfo";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { usePathname } from "next/navigation";

interface CertificationLevelProps {
  selectedPlan?: string | null;
  setSelectedPlan?: (planId: string) => void;
}

export default function CertificationLevel({
  selectedPlan,
  setSelectedPlan,
}: CertificationLevelProps) {
  const path = usePathname();

  const handleSelectPlan = (planId: string) => {
    if (setSelectedPlan) {
      setSelectedPlan(planId);
    }
  };

  return (
    <div className="relative flex w-full flex-col gap-16  px-4 py-16 text-center sm:px-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex"
            >
              <div
                onClick={() => {
                  if (path === "/certification/price") {
                    handleSelectPlan(plan.id);
                  }
                }}
                className={cn(
                  " relative h-full w-full text-left transition-all hover:shadow-lg p-6 cursor-pointer ease-in-out ",

                  "ring-primaryColor/50 dark:shadow-primaryColor/10 shadow-md ring-2 rounded-lg",
                  selectedPlan === plan.id ? "bg-[#fef4e7]" : "bg-secondary/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                    <Badge className="bg-[#26344e] text-white rounded-full px-4 py-1 shadow-sm">
                      {plan.id}
                    </Badge>
                  </div>
                )}

                {/* heading  */}
                <div className="flex flex-col items-center justify-center gap-2 border-b mb-6">
                  <h1
                    className={`text-textColor text-2xl font-semibold leading-normal`}
                  >
                    {plan.name}
                  </h1>

                  <p className="text-sm text-center text-[#444952] leading-5 font-normal px-7">
                    {plan.description}
                  </p>
                  <div className="px-3 py-1 bg-[#f3f3f3] rounded-lg text-xs w-20 mx-auto">
                    <p>Standard</p>
                  </div>
                  <div className="flex items-center justify-between w-full pt-6 pb-4">
                    <p className="text-base text-textColor font-medium leading-normal">
                      CPD Hours
                    </p>
                    <p className="text-base text-textColor font-bold leading-normal">
                      25-50 hours
                    </p>
                  </div>
                </div>

                {/* features list */}

                <div className="grid gap-3 pb-6">
                  <p className="text-xl font-semibold leading-normal text-textColorl">
                    Included Benefits:
                  </p>
                  {plan.features.map((feature, index) => (
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
                          plan.popular
                            ? "bg-primaryColor/10 text-primaryColor"
                            : "bg-secondary text-secondary-foreground"
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span
                        className={
                          plan.popular
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {path !== "/certification/price" && (
                  <div>
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      href="/certification/price"
                      className={cn(
                        "w-full font-medium transition-all duration-300",
                        plan.popular
                          ? "bg-primaryColor hover:bg-primaryColor/90 hover:shadow-primaryColor/20 hover:shadow-md"
                          : "hover:border-primaryColor/30 hover:bg-primaryColor/5 hover:text-primaryColor"
                      )}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
