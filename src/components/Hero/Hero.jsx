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
          <motion.h1
            className="text-[43px] md:text-[60px] mb-0 md:mb-6 area-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Navigating the digital landscape for success
          </motion.h1>

          <motion.div
            className="mb-5 area-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img src={heroIllustration} alt="illustration" />
          </motion.div>

          <motion.p
            className="text-base md:text-xl mb-10 md:mb-6 area-description"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="area-button"
          >
            <LinkBtn mode="primary" link="#form" className="md:w-fit">
              Book a consultation
            </LinkBtn>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:justify-center md:flex-row md:gap-[96px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          <LogoSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

