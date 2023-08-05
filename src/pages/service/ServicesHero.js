import React from "react";
import { styled } from "styled-components";

export default function ServicesHero() {
  return (
    <Container>
      <h2>Our Services</h2>
    </Container>
  );
}

// const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#020";

const Container = styled.div`
  padding: 5rem 3rem;
  background: linear-gradient(#3e081989, #4b081d89),
    url("/assets/images/hero-bg.jpg");

  h2 {
    font-family: Poppins;
    font-size: 2.3rem;
    color: ${bg};
  }
`;
