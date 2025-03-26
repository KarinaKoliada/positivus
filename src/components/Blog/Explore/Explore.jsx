import CardsGrid from "../../../CardsGrid/CardsGrid";
import SectionTab from "../../SectionTab/SectionTab";
import { exploreBlogTabProps } from "../../Service/ServicesSettings";
import { ExploreSettings } from "./ExploreSettings";

const Explore = () => {
  return (
    <section id="explore" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={exploreBlogTabProps.title}
          desc={exploreBlogTabProps.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <CardsGrid setting={ExploreSettings} />
      </div>
    </section>
  );
};

export default Explore;
