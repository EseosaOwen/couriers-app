import React from "react";
import { styled } from "styled-components";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import Guaranty from "../home/Guaranty";
import ContactService from "./ContactService";

export default function Services() {
  return (
    <Container>
      <ServicesHero />
      <ServicesList />
      <ContactService />
      <Guaranty />
    </Container>
  );
}

const Container = styled.div``;
