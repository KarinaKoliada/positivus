import { motion } from "framer-motion";
import { JourneySettings } from "./JourneySettings";
import GreenStar from "../../../assets/green-star1.svg?react";
import Spin from "../../../assets/spin.svg?react";
import SectionTab from "../../SectionTab/SectionTab";
import { journeyTabProps } from "../../Service/ServicesSettings";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
  }),
};

const Journey = () => {
  return (
    <section
      id="our-journey"
      className="mb-16 lg:mb-[140px] lg:relative lg:overflow-hidden"
    >
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={journeyTabProps.title}
          desc={journeyTabProps.desc}
          className="pb-[40px] lg:pb-[60px] xl:pb-[80px]"
        />

        <ul className="relative lg:static flex flex-col gap-10 lg:gap-[70px]">
          <div className="absolute left-12 top-10 bottom-0 w-[1px] bg-[#B9FF66] z-10 lg:hidden"></div>
          <Spin className="absolute -left-28 top-[400px] hidden lg:block" />
          <Spin className="absolute -right-28 top-[750px] hidden lg:block" />

          {JourneySettings.map(({ number, title, desc }, index) => (
            <motion.li
              className={`relative lg:flex lg:items-start ${
                index % 2 === 1 ? "lg:ml-auto" : "lg:mr-auto"
              }`}
              key={number}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="flex gap-5 items-center">
                <GreenStar className="absolute left-[30px] w-9 h-9 z-20 lg:hidden" />
                <motion.h1
                  className="flex items-start mr-7 ml-24 lg:ml-0"
                  variants={fadeInUp}
                  custom={index}
                >
                  {number}
                </motion.h1>
              </div>

              <motion.div
                className="pl-16 pr-5 lg:px-[120px] flex py-10 flex-col items-start gap-5 rounded-[45px] border max-w-[600px] border-[#191A23] bg-[#191A23]"
                variants={fadeInUp}
                custom={index + 1}
              >
                <div className="flex items-center gap-3 relative">
                  <GreenStar className="absolute -left-6 w-4 h-4 rotate-45 lg:hidden" />
                  <motion.h3
                    className="text-white pl-8 lg:pl-0"
                    variants={fadeInUp}
                    custom={index + 1}
                  >
                    {title}
                  </motion.h3>
                </div>
                <motion.span
                  className="text-white pl-8 lg:pl-0"
                  variants={fadeInUp}
                  custom={index + 1}
                >
                  {desc}
                </motion.span>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Journey;
