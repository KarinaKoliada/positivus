import PropTypes from "prop-types";
import SectionTab from "../SectionTab/SectionTab";
import { testimonialTabProps } from "../Service/ServicesSettings";
import MySwiper from "../Swiper/Swiper";

const Testimonials = ({ className }) => {
  return (
    <section
      id="testimonials"
      className={`scroll-mt-5 pb-[60px] md:-[90px] lg:pb-[140px] ${className}`}
    >
      <div className=" px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={testimonialTabProps.title}
          desc={testimonialTabProps.desc}
          className={"pb-10 md:pb-[85px]"}
        />
        <MySwiper />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
