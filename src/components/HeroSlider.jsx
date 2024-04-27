import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import images
import HeroImg1 from "../assets/images/fondation/fondation-cover.jpg";
import HeroImg2 from "../assets/images/fondation/m2.jpg";
import HeroImg3 from "../assets/images/heroSlider/3.jpg";

const slides = [
  {
    title: "Fondation Richesse Humaine",
    prevtitle: "",
    subtitle:"Résolument engagé à créer  de la valeur dans tous les domaines de la vie socio-économique en construisant l'avenir des jeunes Congolais dans l'emploi, l'entrepreunariat social et des affaires",
    background: HeroImg1,
    btnText: "Présentation",
  },
  {
    title: "Fondation Richesse Humaine",
    subtitle: "Notre engagement envers le développement personnel et professionnel des jeunes est crucial pour stimuler la croissance économique et sociale en République Démocratique du Congo",
    prevtitle:"",
    background: HeroImg2,
    btnText: "Présentation",
  }
];

const HeroSlider = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px] lg:h-[860px]"
      >
        {slides.map((slide, index) => {
          // destructure slide
          const { title, background, btnText, subtitle, prevtitle } = slide;

          return (
            <SwiperSlide
              className="relative flex h-full items-center justify-center bg-pink-200"
              key={index}
            >
              {/* hero data */}
              <div className="container z-20 mx-auto text-center text-white">
                <div className="mb-5 font-tertiary uppercase tracking-[6px]">
                  {prevtitle}
                </div>
                <h1 className="mx-auto max-w-[920px] font-bold font-primary text-[30px] uppercase lg:text-[50px] ">
                  {title}
                </h1>
                <p className="font-primary text-[18px] mb-3" >{subtitle}</p>
                <button className="btn btn-primary btn-lg mx-auto">
                  {btnText}
                </button>
              </div>

              {/* hero background */}
              <div className="absolute top-0 left-0 h-full w-full">
                <img
                  src={background}
                  alt="hero slide image"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* hero overlay */}
              <div className="absolute top-0 left-0 h-full w-full bg-black/60" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
