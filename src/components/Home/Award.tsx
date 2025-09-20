"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import Heading from "../ui/heading";
import { MediaButton } from "../ui/icon";

export function Awards() {
  return (
    <div className="container mx-auto py-16 px-5 xl:px-0">
      <Heading
        title="Why Choose CPD Awards"
        subtitle="Our certification and accreditation programs deliver measurable value
        for professionals and organizations worldwide."
      />

      <div className="mt-11">
        <HoverEffect
          items={securityItems}
          renderItem={(item) => (
            <div className="p-7 bg-[#f9fafb]  shadow-security-card-shadow rounded-lg">
              <div className="flex items-center gap-2">
                <div className="bg-[#293650] rounded-lg flex items-center justify-center size-12">
                  {item.iconType}
                </div>
                <h1 className="text-lg text-textColor font-semibold leading-[120%]">
                  {item.title}
                </h1>
              </div>
              <p className="text-sm text-secondaryColor font-normal leading-7 mt-3">
                {item.description}
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
}
const securityItems = [
  {
    title: "Global Recognition",
    description:
      "Certificates recognized in 85+ countries with established international partnerships and standards alignment.",
    iconType: <MediaButton type="recognitation" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous assessment processes with independent audits ensuring the highest professional standards.",
    iconType: <MediaButton type="quality" />,
  },
  {
    title: "Career Growth",
    description:
      "Demonstrable impact on career progression with salary increases averaging 23% within 12 months.",
    iconType: <MediaButton type="growth" />,
  },
  {
    title: "Professional Network",
    description:
      "Join an exclusive community of certified professionals and fellows with opportunities.",
    iconType: <MediaButton type="network" />,
  },
  {
    title: "Blockchain Verification",
    description:
      "Tamper-proof digital certificates with instant verification and lifetime authenticity guarantee.",
    iconType: <MediaButton type="verification" />,
  },
  {
    title: "Employer Trust",
    description:
      "Preferred by leading employers worldwide for validated professional competency and commitment.",
    iconType: <MediaButton type="trust" />,
  },
];
