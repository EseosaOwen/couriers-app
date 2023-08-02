import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

SwiperCore.use([Autoplay, EffectCoverflow, Navigation, Pagination]);

const sliderData = [
  {
    header: "Cargo Insurance",
    content: "Mauris eu velit ac mauris tincidunt mattis. Etiam cursus vel",
    image: "insurance-dollar.png",
  },
  {
    header: "Online Tracking",
    content:
      "Ut viverra, ante ut mattis mollis, felis felis eleifend dolor, non suscipit",
    image: "box-checking.png",
  },
  {
    header: "Box checking",
    content: "Maecenas pharetra accumsan venenatis. Nam ut aliquam erat",
    image: "box-checking.png",
  },
];

const Slider = () => {
  const swiperRef = React.useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      className="swiper-main"
      spaceBetween={30}
      slidesPerView={3}
      //   loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      //   navigation
      breakpoints={{
        // Customize breakpoints to adjust slides per view for different screen sizes
        1024: {
          slidesPerView: 3,
        },
        650: {
          slidesPerView: 2,
        },
        250: {
          slidesPerView: 1,
        },
      }}
      noSwipingClass="swiper-no-swiping"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-container">
          <div className="slider-slide">
            <figure>
              <img src={`/assets/images/${slide.image}`} alt={slide.header} />
            </figure>
            <div className="slider-content">
              <h3>{slide.header}</h3>
              <p>{slide.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="slider-controler">
        <div
          className="swiper-button-prev slider-arrow"
          onClick={handlePrevClick}
        ></div>
        <div
          className="swiper-button-next slider-arrow"
          onClick={handleNextClick}
        ></div>
      </div>
    </Swiper>
  );
};

export default function Guaranty() {
  return (
    <Container>
      <TopSection>
        <h1>
          Trusted by more than <span>365,000</span> happy clients
        </h1>
        <p>
          Sed tempor nec est finibus molestie. Sed molestie orci eleifend,
          sodales est ut, aliquam quam. Mauris fringilla consectetur purus eget
          egestas. Proin varius interdum blandit.
        </p>
      </TopSection>
      <Slider />
    </Container>
  );
}

const primary = "#E11756";
// const secondary = "#FCCC0A";
// const heroText = "#BFC1C2";
const bg = "#fff";
const dark = "#757677";

const Container = styled.div`
  padding: 3rem;

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }

  .swiper-main {
    padding: 2rem 1rem;
    position: relative;

    @media (max-width: 800px) {
      padding: 2rem 0;
    }
  }

  .swiper-container {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 0 10px 1px #54354d13;
    height: auto;
  }

  .slider-slide {
    padding: 1rem;
    background: ${bg};

    @media (max-width: 500px) {
      padding: 1rem;
      margin: 0 1rem;
    }

    figure {
      padding: 1rem;
      border-radius: 50%;
      background: linear-gradient(90deg, ${primary}, #940c6c);
      width: fit-content;
    }

    img {
      width: 30px;
      height: 30px;
    }

    .slider-content {
      margin-top: 1rem;
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
      }
      p {
        color: ${dark};
      }
    }
  }

  .slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-controler {
    position: initial;
  }

  .slider-controler .swiper-button-prev {
    /* left: 2% !important; */
    color: ${primary};
    transition: all 0.2s ease;

    @media (max-width: 650px) {
      left: -2% !important;
      z-index: 99;
    }
  }

  .slider-controler .swiper-button-next {
    /* left: 97% !important; */
    color: ${primary};
    transition: all 0.2s ease;

    @media (max-width: 650px) {
      left: 90% !important;
      z-index: 99;
    }
  }

  .slider-controler .swiper-button-prev:hover,
  .slider-controler .swiper-button-next:hover {
    transition: all 0.2s ease;
  }

  .slider-controler .slider-arrow {
    position: absolute;
    width: 3rem;
    height: 3rem;
  }
`;

const TopSection = styled.div`
  h1 {
    font-size: 2rem;
    font-family: Poppins;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 800px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
      width: 100%;
    }

    span {
      color: ${primary};
      font-family: Poppins;
    }
  }

  p {
    width: 80%;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;

// const CustomPrevButton = styled.button`
//   left: 10% !important;
//   background: white;
//   color: black;
//   transition: all 0.2s ease;
// `;

// const CustomNextButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   transform: translateX(-58%) !important;
// `;
