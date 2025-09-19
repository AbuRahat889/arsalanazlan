"use client";

import React, { useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MediaButton } from "./icon";
import Modal from "./modal";
import PaymentSuccess from "../Payment/PaymentModal";

const stripePromise = loadStripe(
  "pk_test_51NHtsDCJ7JQjNEqYMtdwIJKK4uua2gz5wPOzaSGDwYVjMgphAhxlFxMDaAyFsTqqDf2W2YXkhpBVFScpQ5CTxgUA00P9KYmKmg"
);

const inputStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1f2937", // gray-800
      "::placeholder": {
        color: "#9ca3af", // gray-400
      },
    },
    invalid: {
      color: "#ef4444", // red-500
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardNumberElement = elements.getElement(CardNumberElement);
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement!,
    });
    console.log("Payment Method:", paymentMethod);

    setLoading(false);
    setIsModalOpen(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <CardNumberElement options={inputStyle} className="w-full" />
            <span className="ml-2 text-indigo-500 font-semibold">stripe</span>
          </div>
        </div>

        {/* Expiry + CVC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Expiration date (MM/YY)
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <CardExpiryElement options={inputStyle} className="w-full" />
              <MediaButton type="calender" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Security code
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <CardCvcElement options={inputStyle} className="w-full" />
              <MediaButton type="card" />
            </div>
          </div>
        </div>

        {/* Country dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>

          <input
            type="text"
            placeholder="Enter your country"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!stripe || loading}
          className={`w-full py-2 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-primaryColor "
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <PaymentSuccess />
      </Modal>
    </div>
  );
};

const StripePayment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripePayment;
