import { motion } from "framer-motion";
import LinkBtn from "../../../LinkBtn/LinkBtn";
import JoinIllustration from "../../../assets/join.svg?react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
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

const Join = () => {
  return (
    <motion.section
      id="join-us"
      className="mb-[60px] lg:mb-[120px]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="border border-black rounded-[45px] px-[50px] pt-[60px] pb-[82px] lg:px-16 lg:pt-10 lg:pb-16 bg-[#B9FF66]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left">
            <motion.div className="lg:max-w-[50%]" variants={textVariants}>
              <h3 className="text-3xl mb-[26px]">Join Our Team</h3>
              <p className="text-lg mb-[26px]">
                At Positivus, we thrive on innovation and collaboration.
                We&apos;re always looking for passionate individuals to join our
                team and help businesses grow. Ready to make an impact?
              </p>
              <div className="w-full">
                <LinkBtn mode="primary" link="#form" className={"w-full"}>
                  Explore Careers
                </LinkBtn>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/3 flex justify-center mt-[30px] lg:mt-0"
              variants={imageVariants}
            >
              <JoinIllustration className="w-full max-w-[400px] lg:max-w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Join;
