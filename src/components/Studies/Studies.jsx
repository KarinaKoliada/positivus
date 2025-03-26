import SectionTab from "../SectionTab/SectionTab";
import { casesTabProps } from "../Service/ServicesSettings";
import { StudiesSettings } from "./StudiesSettings";
import StudiesSlider from "./StudiesSlider";
import UseCases from "../../UseCases/UseCases";
const Studies = () => {
  return (
    <section id="studies" className="scroll-mt-5 ">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={casesTabProps.title}
          desc={casesTabProps.desc}
          className={" pb-[60px] lg:pb-[70px] xl:pb-[85px]"}
        />
        <UseCases setting={StudiesSettings} className={"h-64"} />
        <div className="block lg:hidden">
          <StudiesSlider section={StudiesSettings} className={"h-80 md:h-64"} />
        </div>
      </div>
    </section>
  );
};

export default Studies;
