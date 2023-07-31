import { styled } from "styled-components";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function WhyChooseUs() {
  return (
    <Container>
      <Main>
        <h2>
          Why <span>Choose</span> us
        </h2>
        <p>
          Donec varius, nisi sed cursus varius, dolor dui vehicula enim, eu
          porttitor lacus metus vitae nibh. Etiam efficitur lorem et lorem
          ultricies mollis. Sed non bibendum orci. Cras non mi sagittis,
          vehicula erat ut, posuere orci
        </p>
        <Reasons>
          <Reason>
            <figure>
              <MdOutlineAttachMoney size={20} color={primary} />
            </figure>
            <div>
              <h2>Fast and reliable</h2>
              <p>
                Donec varius, nisi sed cursus varius, dolor dui vehicula enim,
                eu porttitor lacus
              </p>
            </div>
          </Reason>
          <Reason>
            <figure>
              <MdOutlineAttachMoney size={20} color={primary} />
            </figure>
            <div>
              <h2>Fast and reliable</h2>
              <p>
                Donec varius, nisi sed cursus varius, dolor dui vehicula enim,
                eu porttitor lacus
              </p>
            </div>
          </Reason>
          <Reason>
            <figure>
              <MdOutlineAttachMoney size={20} color={primary} />
            </figure>
            <div>
              <h2>Fast and reliable</h2>
              <p>
                Donec varius, nisi sed cursus varius, dolor dui vehicula enim,
                eu porttitor lacus
              </p>
            </div>
          </Reason>
        </Reasons>
      </Main>
      <Image>
        <figure>
          <img src="/assets/images/container-docker.jpg" alt="" />
        </figure>
      </Image>
    </Container>
  );
}

const primary = "#E11756";
const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
// const dark = "#757677";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(#3e081989, #4b081d89),
    url("/assets/images/cargo.jpg");
  background-size: cover;
  background-position: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Main = styled.div`
  flex: 1;
  > h2 {
    color: ${bg};
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-family: Poppins;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }

    span {
      font-family: Poppins;
      color: ${secondary};
    }
  }
  p {
    color: ${bg};
  }
`;

const Reasons = styled.div`
  margin-top: 1rem;
`;
const Reason = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  figure {
    padding: 1rem;
    /* flex: 0.01; */
    background: ${bg};
    border-radius: 50%;
    width: fit-content;
  }

  div {
    flex: 1;
  }

  h2 {
    color: ${bg};
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: ${bg};
  }
`;

const Image = styled.div`
  flex: 0.7;
  figure {
    img {
      width: 100%;
    }
  }
`;
