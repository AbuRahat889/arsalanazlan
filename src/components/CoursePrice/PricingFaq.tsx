import React from "react";
import Heading from "../ui/heading";
import FaqItem from "../ui/faq";

export default function PricingFaq() {
  const faqItems = [
    {
      id: "1",
      question: "What is MVPBlocks?",
      answer:
        "MVPBlocks is a collection of ready-to-use UI components built with Next.js and Tailwind CSS. It helps developers quickly build beautiful, responsive websites without starting from scratch.",
    },
    {
      id: "2",
      question: "Is MVPBlocks free to use?",
      answer:
        "Yes, MVPBlocks is completely free and open-source. You can use it for personal and commercial projects without any restrictions or attribution requirements.",
    },
    {
      id: "3",
      question: "Do I need to know Tailwind CSS to use MVPBlocks?",
      answer:
        "While having Tailwind CSS knowledge is helpful, it's not required. You can simply copy and paste our components into your project and make basic modifications without deep Tailwind expertise.",
    },
    {
      id: "4",
      question: "How do I install MVPBlocks?",
      answer:
        "You don't need to install MVPBlocks as a package. Simply browse our component library, find the components you need, and copy the code into your project. Make sure you have the required dependencies installed.",
    },
  ];

  return (
    <div className="bg-white pt-10 md:pt-16 ">
      <Heading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our pricing and packages."
      />

      <div className="mt-10 container mx-auto">
        <FaqItem faqItems={faqItems} />
      </div>
    </div>
  );
}
