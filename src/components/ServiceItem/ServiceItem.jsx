import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ArrowBtn from "../../assets/arrow.svg?react";
import CoveredTitle from "../../CoveredTitle/CoveredTitle";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.6 },
  },
};

const ServiceItem = ({ title1, title2, theme, img, alt }) => {
  const themeSettings = (() => {
    if (theme === "light") {
      return {
        cardBackgroundColor: "#F3F3F3",
        titleBackgroundColor: "#B9FF66",
        textColor: "#000",
        ArrowColor: "#B9FF66",
        ArrowBackgroundColor: "#191A23",
      };
    }

    if (theme === "green") {
      return {
        cardBackgroundColor: "#B9FF66",
        titleBackgroundColor: "#FFFFFF",
        textColor: "#000",
        ArrowColor: "#B9FF66",
        ArrowBackgroundColor: "#191A23",
      };
    }

    if (theme === "black") {
      return {
        cardBackgroundColor: "#000",
        titleBackgroundColor: "#FFFFFF",
        textColor: "#FFFFFF",
        ArrowColor: "#000",
        ArrowBackgroundColor: "#FFFFFF",
      };
    }
    if (theme === "grey") {
      return {
        cardBackgroundColor: "#F3F3F3",
        titleBackgroundColor: "#FFFFFF",
        textColor: "#000",
        ArrowColor: "#B9FF66",
        ArrowBackgroundColor: "#000",
      };
    }
  })();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-areas-services-mobile md:grid-areas-services-desktop p-[50px] 
      rounded-[45px] lg:h-[310px] border border-[#191a23] shadow-[0px_5px_0px_0px_#191a23] 
      transition-all duration-[2000ms] ease-in-out"
      style={{ backgroundColor: themeSettings.cardBackgroundColor }}
    >
      <motion.div
        variants={fadeInDown}
        className="area-title text-2xl md:text-4xl lg:text-3xl"
      >
        <CoveredTitle setting={themeSettings} title1={title1} title2={title2} />
      </motion.div>

      <motion.div
        variants={buttonAnimation}
        className="area-button flex justify-start md:justify-center mt-auto gap-1"
      >
        <a
          className="border-none cursor-pointer flex gap-4 hover:bg-transparent items-center"
          style={{ color: themeSettings.textColor }}
          href="#form"
        >
          <div
            className="rounded-full w-10 h-10 flex justify-center items-center"
            style={{ backgroundColor: themeSettings.ArrowBackgroundColor }}
          >
            <ArrowBtn style={{ color: themeSettings.ArrowColor }} />
          </div>

          <span className="hidden md:block">Learn more</span>
        </a>
      </motion.div>

      <motion.div className="area-image flex justify-center items-center">
        <img className="mt-7" src={img} alt={alt} />
      </motion.div>
    </motion.div>
  );
};

ServiceItem.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "green", "black", "grey"]).isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ServiceItem;
