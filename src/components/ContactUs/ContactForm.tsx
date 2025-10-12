"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useSendMessageMutation } from "@/redux/api/contact";
import { toast } from "sonner";

export default function ContactForm() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   email
  // :
  // "ketyjika@mailinator.com"
  // firstName
  // :
  // "Rina"
  // message
  // :
  // "Est inventore repreh"
  // subject
  // :
  // "Esse commodo consect"

  // Handle form submission
  const [contactFN, { isLoading }] = useSendMessageMutation();
  const onSubmit = async (data: any) => {
    const res = await contactFN(data).unwrap();
    console.log(res);
    if (res?.success) {
      toast.success(res?.message || "Message sent successfully");
      reset();
    } else {
      toast.error("Failed to send message");
    }
    try {
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="p-6 border border-borderColor rounded-lg shadow-[0_0_40px_0_rgba(237,144,12,0.08)]"
    >
      <div className="space-y-6" ref={formRef}>
        <div>
          <h2 className="text-2xl font-bold leading-7 text-textColor">
            Contact Form
          </h2>
          <p className="text-base font-normal text-secondaryColor leading-normal">
            We&apos;ll get back to you within 2 hours during business hours
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className={`w-full px-3 py-2 border ${
                  errors.fullName ? "border-red-500" : "border-input"
                } bg-background text-secondaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor`}
                placeholder="Enter your name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-input"
                } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor`}
                placeholder="abc@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              className={`w-full px-3 py-2 border ${
                errors.subject ? "border-red-500" : "border-input"
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor`}
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message as string}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: "Message is required" })}
              className={`w-full px-3 py-2 border ${
                errors.message ? "border-red-500" : "border-input"
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor resize-vertical`}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message as string}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
