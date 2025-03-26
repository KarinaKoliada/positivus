import Form from "../Form/Form";
import SectionTab from "../SectionTab/SectionTab";
import { contactTabProps } from "../Service/ServicesSettings";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="pb-[90px] md:pb-[110px] lg:pb-[125px] xl:pb-[140px] scroll-mt-5 "
    >
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px] ">
        <SectionTab
          id="form"
          title={contactTabProps.title}
          desc={contactTabProps.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
