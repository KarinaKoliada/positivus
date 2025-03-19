import { motion } from "framer-motion";
import PropTypes from "prop-types";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const HeroSection = ({ title, img, desc, subTitle }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "rounded-[45px] lg:p-[88px_100px_64px_85px] lg:bg-[#F3F3F3] grid w-fit",
        subTitle
          ? "grid-success-areas-mobile lg:grid-success-areas-desktop"
          : "grid-no-subtitle-mobile lg:grid-no-subtitle-desktop"
      )}
    >
      {subTitle && (
        <motion.p
          variants={fadeInUp}
          className="text-[#696969] text-lg mt-10 lg:mt-0 rounded-[9px] bg-[#E8E8E8] px-4 py-1 area-subtitle w-fit"
        >
          {subTitle}
        </motion.p>
      )}

      <motion.h1
        variants={fadeInUp}
        className="text-[43px] leading-tight md:text-6xl area-title"
      >
        {title}
      </motion.h1>

      <motion.div
        variants={imageVariant}
        className="my-9 md:my-6 lg:my-0 area-image"
      >
        <img src={img} alt="illustration" />
      </motion.div>

      <motion.p
        variants={fadeInUp}
        className="text-base md:text-xl area-description"
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default HeroSection;
