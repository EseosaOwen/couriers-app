import React from "react";
import { styled } from "styled-components";
import AboutHero from "./AboutHero";
import StepsToCooperation from "./StepsToCooperation";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../home/Testimonials";
import ContactDelivery from "./ContactDelivery";

export default function About() {
  return (
    <Container>
      <AboutHero />
      <StepsToCooperation />
      <WhyChooseUs />
      <Testimonials />
      <ContactDelivery />
    </Container>
  );
}



const Container = styled.div``;
