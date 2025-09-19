"use client";

import FaqItem from "../ui/faq";
import Heading from "../ui/heading";

export default function Faqs() {
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
    {
      id: "5",
      question: "Can I customize the components?",
      answer:
        "Absolutely! All components are built with customization in mind. You can modify colors, spacing, typography, and more using Tailwind classes or by editing the component code directly.",
    },
    {
      id: "6",
      question: "Do MVPBlocks components work with dark mode?",
      answer:
        "Yes, all MVPBlocks components are designed to work seamlessly with both light and dark modes. They automatically adapt to your site's theme settings.",
    },
    {
      id: "7",
      question: "How often are new components added?",
      answer:
        "We regularly add new components to the library. Our goal is to provide a comprehensive set of components for all common UI patterns and website sections.",
    },
    {
      id: "8",
      question: "How can I contribute to MVPBlocks?",
      answer:
        "We welcome contributions! You can contribute by creating new components, improving existing ones, fixing bugs, or enhancing documentation. Check our GitHub repository for contribution guidelines.",
    },
  ];

  return (
    <div className="bg-white py-10 md:py-16 ">
      <Heading
        title="Frequently Asked Questions"
        subtitle="Our certification and accreditation programs deliver measurable value for professionals and organizations worldwide."
      />

      <div className="mt-7 container mx-auto">
        <FaqItem faqItems={faqItems} />
      </div>
    </div>
  );
}
