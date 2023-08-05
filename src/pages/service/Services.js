import React from "react";
import { styled } from "styled-components";
import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import Guaranty from "../home/Guaranty";

export default function Services() {
  return (
    <Container>
      <ServicesHero />
      <ServicesList />
      <Guaranty />
    </Container>
  );
}

const Container = styled.div``;
