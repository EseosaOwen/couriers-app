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

const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#020";

const Container = styled.div``;
