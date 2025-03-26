import { motion } from "framer-motion";
import StarsMob from "../../../assets/stars-mob.svg?react";
import StarsDesc from "../../../assets/stars.svg?react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
  },
};

const Stars = () => {
  return (
    <motion.section
      id="stars"
      className="pb-[60px] md:pb-[140px]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-5 px-[35px] pt-[50px] pb-8 justify-center items-center border rounded-[45px] bg-[#191A23]">
          <motion.div
            className="flex justify-center md:justify-end"
            variants={imageVariants}
          >
            <StarsMob className="md:hidden" />
            <StarsDesc className="hidden md:block" />
          </motion.div>

          <motion.div
            className="flex flex-col text-start md:text-left"
            variants={textVariants}
          >
            <h2 className="text-4xl text-white mb-10">
              “At Positivus, we believe that success is built on innovation,
              collaboration, and a relentless focus on delivering results.”
            </h2>
            <p className="hidden md:block text-white text-2xl">
              — John Smith, Founder of Positivus
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Stars;
