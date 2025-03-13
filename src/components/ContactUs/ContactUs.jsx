import Form from "../Form/Form";
import SectionTab from "../SectionTab/SectionTab";
import { contactTabProps } from "../Service/ServicesSettings";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="mb-[90px] md:mb-[110px] lg:mb-[125px] xl:pb-[140px] scroll-mt-5 "
    >
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px] ">
        <SectionTab
          id="form"
          title={contactTabProps.title}
          desc={contactTabProps.desc}
          className="mb-[40px] md:mb-[85px]"
        />
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
