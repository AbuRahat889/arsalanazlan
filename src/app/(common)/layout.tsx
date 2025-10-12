import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { Toaster } from "sonner";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
