"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactForm() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="p-6 border-2 border-borderColor rounded-lg shadow-[0_0_40px_0_rgba(237,144,12,0.08)]"
    >
      {/* Contact Form Section */}
      <div className="space-y-6" ref={formRef}>
        <div>
          <h2 className="text-2xl font-bold leading-7 text-textColor">
            Contact Form
          </h2>
          <p className="text-base font-normal text-secondaryColor leading-normal">
            We&apos;ll get back to you within 2 hours during business hours
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border border-input bg-background text-secondaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="emal"
                className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor"
              placeholder="Subject"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor resize-vertical"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}
