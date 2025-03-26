import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LinkBtn from "../LinkBtn/LinkBtn";

const FreeProposal = ({ picture, title, className }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="px-5 w-full md:px-[35px] lg:px-[60px] xl:px-[100px] pb-[60px] md:pb-[75px] lg:pb-[100px] xl:pb-[164px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className={`flex py-[40px] px-[35px] md:py-[40px] md:px-[35px] justify-between md:h-[347px] items-center rounded-[45px] lg:px-[60px] ${className}`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex lg:w-1/2 flex-col items-start justify-between gap-[26px]"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl">
            {title}
          </motion.h3>
          <motion.p variants={itemVariants} className="text-base md:text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </motion.p>
          <motion.div variants={itemVariants}>
            <LinkBtn mode="primary" link="#form">
              Get your free proposal
            </LinkBtn>
          </motion.div>
        </motion.div>

        <div className="hidden lg:pr-[80px] xl:pr-[100px] lg:flex items-center">
          <img className="max-w-none" src={picture} alt="illustration" />
        </div>
      </motion.div>
    </div>
  );
};

FreeProposal.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FreeProposal;
