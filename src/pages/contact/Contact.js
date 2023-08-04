import React from "react";
import { Carousel } from "../../components/Carousel";
import { styled } from "styled-components";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import Guaranty from "../home/Guaranty";
import ContactCards from "./ContactInformation";

export default function Contact() {
  return (
    <Container>
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <Guaranty />
    </Container>
  );
}

const Container = styled.div``;
