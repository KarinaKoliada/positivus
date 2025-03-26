import { motion } from "framer-motion";
import GreenStar from "../../../assets/green-vector.svg?react";
import LinkBtn from "../../../LinkBtn/LinkBtn";
import CoveredTitle from "../../../CoveredTitle/CoveredTitle";
import { optimizationTabProps } from "../../Service/ServicesSettings";

const title1 = "Search engine";
const title2 = "optimization";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
  }),
};

const Optimization = () => {
  return (
    <section id="optimization" className="scroll-mt-5 pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <motion.div
          className="px-10 pt-10 pb-[50px] lg:pt-[60px] lg:pb-[68px] lg:pl-[40px] lg:pr-[100px] rounded-[45px] bg-[#191A23]"
          initial="hidden"
          animate="visible"
        >
          <div className="flex gap-5 lg:flex-row lg:gap-14">
            <motion.div
              className="w-5 h-5 lg:w-9 lg:h-9"
              variants={fadeInUp}
              custom={0}
            >
              <GreenStar className="w-5 h-5 lg:w-9 lg:h-9 rotate-45 lg:rotate-0" />
            </motion.div>

            <div>
              <motion.h3
                className="lg:hidden uppercase mb-5 text-[#B9FF66] text-[26px]"
                variants={fadeInUp}
                custom={1}
              >
                Featured
              </motion.h3>

              <div className="flex flex-col lg:flex-row text-start">
                <motion.div
                  className="mb-5 lg:mb-0 pr-5 text-2xl md:text-4xl lg:text-3xl"
                  variants={fadeInUp}
                  custom={2}
                >
                  <CoveredTitle
                    setting={{ titleBackgroundColor: "#B9FF66" }}
                    title1={title1}
                    title2={title2}
                  />
                </motion.div>

                <motion.p
                  className="mb-5 lg:mb-[50px] text-white text-lg text-left leading-6"
                  variants={fadeInUp}
                  custom={3}
                >
                  {optimizationTabProps.desc}
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} custom={4}>
                <LinkBtn mode={"secondary"} link={"#form"}>
                  Boost My Rankings
                </LinkBtn>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Optimization;
