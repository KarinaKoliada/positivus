import { motion } from "framer-motion";
import robotImg from "../../../assets/robot.svg";
import LinkBtn from "../../../LinkBtn/LinkBtn";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const SearchRanking = () => {
  return (
    <section id="search-ranking" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <motion.div
          {...fadeInUp}
          className="grid pb-16 md:gap-6 md:pb-20 w-full 
          grid-search-areas-mobile lg:grid-search-areas-desktop rounded-[45px] border p-10 gap-5 shadow-[0px_5px_0px_0px_#191a23] border-black"
        >
          <motion.h3
            {...fadeInUp}
            className="text-[26px] font-medium area-title lg:whitespace-nowrap"
          >
            Ready to Elevate Your Search Rankings?
          </motion.h3>
          <motion.hr
            {...fadeInUp}
            className="h-[1px] border-0 bg-black area-line"
          />
          <motion.p {...fadeInUp} className="text-base area-desc">
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            we`re here to make it happen.
          </motion.p>
          <motion.p
            {...fadeInUp}
            className="font-semibold text-lg area-small-description"
          >
            Let`s work together to grow your online presence.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="area-image w-full flex justify-center"
          >
            <img src={robotImg} className="w-full" alt="robot" />
          </motion.div>
          <motion.div {...fadeInUp}>
            <LinkBtn mode={"green"} link={"#form"}>
              Start My SEO Journey
            </LinkBtn>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchRanking;
