import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const getAccordionAnimation = () => ({
  opacity: 1,
  maxHeight: 500,
  transition: { duration: 0.7 },
});

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const Accordion = ({ position, text, title, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.li
      variants={accordionVariants}
      initial="hidden"
      animate="visible"
      onClick={() => setIsClicked(!isClicked)}
      className={`flex flex-col border border-[#191a23] rounded-[45px] shadow-[0px_5px_0px_0px_#191a23] p-[30px] md:px-[60px] md:py-[41px] justify-center items-start gap-[10px] transition-all duration-[600ms] ease-in-out cursor-pointer ${
        isClicked
          ? `bg-[#B9FF66] lg:h-[280px] ${className}`
          : "bg-[#f3f3f3] h-[98px] lg:h-[160px]"
      }`}
    >
      <div className="flex items-center w-full gap-6">
        <span className="text-base md:text-[60px] md:leading-[60px] font-medium text-[#333]">
          {position}
        </span>
        <div className="flex justify-between w-full items-center">
          <h3 className="text-sm md:text-[30px] md:leading-[30px]">{title}</h3>
          <div className="relative border border-black p-1 md:p-7 bg-[#F3F3F3] rounded-full w-[30px] h-[30px] min-w-[30px] min-h-[30px] md:w-[39px] md:h-[39px] flex items-center justify-center">
            <div className="absolute w-[14px] h-[3px] md:w-[25px] md:h-[6px] bg-black"></div>
            {!isClicked && (
              <div className="absolute w-[14px] h-[3px] md:w-[25px] md:h-[6px] bg-black rotate-90"></div>
            )}
          </div>
        </div>
      </div>

      {isClicked && (
        <motion.div
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={getAccordionAnimation()}
          exit={{ opacity: 0, maxHeight: 0 }}
          className="overflow-hidden"
        >
          <div className="w-full h-px border-t border-solid border-black my-[15px] md:my-[30px]" />
          <p className="text-sm md:text-[18px] md:leading-8">{text}</p>
        </motion.div>
      )}
    </motion.li>
  );
};

Accordion.propTypes = {
  position: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Accordion;
