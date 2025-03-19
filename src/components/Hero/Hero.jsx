import heroIllustration from "../../assets/header-img.svg";
import LinkBtn from "../../LinkBtn/LinkBtn";
import LogoSlider from "./LogoSlider";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="pb-[60px] md:pb-[70px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div
          className="grid gap-3 mb-16 md:gap-6 md:pb-20 w-full 
          grid-areas-mobile lg:grid-areas-desktop"
        >
          <h1 className="text-[43px] md:text-[60px] mb-0 md:mb-6 area-title">
            Navigating the digital landscape for success
          </h1>

          <div className=" mb-5 area-image">
            <img src={heroIllustration} alt="illustration" />
          </div>

          <p className="text-base md:text-xl mb-10 md:mb-6 area-description">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <LinkBtn
            mode="primary"
            link="#form"
            className={"md:w-fit area-button"}
          >
            Book a consultation
          </LinkBtn>
        </div>

        <div className="flex flex-col md:justify-center md:flex-row md:gap-[96px]">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
