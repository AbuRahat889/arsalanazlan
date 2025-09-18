import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="h-screen">

      {children}
      </div>
      <Footer />
    </div>
  );
}
