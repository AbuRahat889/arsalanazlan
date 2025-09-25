"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { MediaButton } from "./icon";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqItem({ faqItems }: { faqItems: FaqItem[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-background ">
      <div className="container mx-auto max-w-6xl ">
        {/* FAQ Grid */}
        <div className="">
          <AnimatePresence>
            {faqItems?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "rounded-xl border border-[#595959] mb-6 transition-all duration-300 ease-in-out",
                  expandedId === faq.id ? "shadow-3xl" : ""
                )}
                style={{ minHeight: "80px" }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between px-3 md:px-6  pt-6 pb-3 text-left"
                >
                  <div className="flex items-start md:items-center gap-2">
                    <MediaButton type="faq" />
                    <h1 className="text-textColor leading-[164%] text-base md:text-xl font-semibold ">
                      {faq.question}
                    </h1>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="text-primary h-5 w-5" />
                    ) : (
                      <PlusIcon className="text-primary h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm md:text-base text-secondaryColor font-normal leading-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
