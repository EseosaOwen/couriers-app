import React from "react";
import Achievements from "./Achievements";
import HeroSection from "./HeroSection";
import Guaranty from "./Guaranty";
import FlightSection from "./FlightSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Achievements />
      <Guaranty />
      <FlightSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
