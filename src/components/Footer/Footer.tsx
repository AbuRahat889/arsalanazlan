import logo from "@/assets/footerLogo.svg";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = {
  facebookLink: "https://facebook.com/mvpblocks",
  instaLink: "https://instagram.com/mvpblocks",
  twitterLink: "https://twitter.com/mvpblocks",
  githubLink: "https://github.com/mvpblocks",
  dribbbleLink: "https://dribbble.com/mvpblocks",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    marketing: "/marketing",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "hello@mvpblocks.com",
    phone: "+91 8637373116",
    address: "United Kingdom",
  },
  company: {
    name: "Mvpblocks",
    description:
      "Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.",
    logo: "https://i.postimg.cc/2SRcktkT/Mvpblocks.webp",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
];

const aboutLinks = [
  { text: "Company History", href: data.about.history },
  { text: "Meet the Team", href: data.about.team },
  { text: "Employee Handbook", href: data.about.handbook },
  { text: "Careers", href: data.about.careers },
];

const serviceLinks = [
  { text: "Web Development", href: data.services.webdev },
  { text: "Web Design", href: data.services.webdesign },
  { text: "Marketing", href: data.services.marketing },
  { text: "Google Ads", href: data.services.googleads },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2d48] mt-16 w-full place-self-end">
      <div className="mx-auto container px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <Image
                src={logo}
                height={200}
                width={200}
                alt="logo"
                className=""
              />
            </div>

            <p className="text-white text-base mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              Leading provider of professional certification and training
              accreditation with globally recognized standards.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8 ">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label} className="bg-primaryColor p-3 rounded-full">
                  <Link
                    prefetch={false}
                    href={href}
                    className="text-white hover:text-primary/80 transition "
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-medium text-white text-left">Services</h1>
              <ul className="mt-8 space-y-4 text-sm text-left">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-white  text-sm hover:underline hover:text-primaryColor transition-colors duration-300"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-medium text-white text-left">Quick Links</h1>
              <ul className="mt-8 space-y-4 text-sm text-left">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-white  text-sm hover:underline hover:text-primaryColor transition-colors duration-300"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left col-span-2 md:col-span-1">
              <h1 className="text-xl font-medium text-white text-left">Contact Us</h1>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <Link className=" flex items-center gap-2 " href="#">
                      <Icon className="text-primaryColor size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-white -mt-0.5 flex-1 not-italic transition text-left">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white text-sm hover:underline hover:text-primaryColor transition-colors duration-300 ">
                          {text}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-white mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
