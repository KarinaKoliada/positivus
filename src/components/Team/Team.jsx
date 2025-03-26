import SectionTab from "../SectionTab/SectionTab";
import { teamTabProps } from "../Service/ServicesSettings";
import { TeamSettings } from "./TeamSettings";
import InstIcon from "../../assets/inst-team.svg?react";
import LinkBtn from "../../LinkBtn/LinkBtn";
const Team = () => {
  return (
    <section id="team" className=" scroll-mt-5 ">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={teamTabProps.title}
          desc={teamTabProps.desc}
          className={"pb-[60px] lg:pb-[70px] xl:pb-[80px]"}
        />
        <div className=" grid grid-cols-1 gap-5 lg:grid-cols-3 md:gap-[40px]">
          {TeamSettings.map(({ name, position, experience, img }, index) => (
            <div
              className="flex flex-col items-start py-[40px] px-[35px] border border-[#191a23] rounded-[45px] bg-white shadow-[0px_5px_0px_0px_#191a23]"
              key={index}
            >
              <div className="flex items-center gap-5 w-full">
                {" "}
                <img className="h-[98px] w-[98px]" src={img} alt={name} />
                <div className="flex flex-col grow relative">
                  {" "}
                  <div className="h-8 w-8 ml-auto">
                    <InstIcon className="h-8 w-8" />
                  </div>
                  <h4>{name}</h4>
                  <p className="text-[#666]">{position}</p>
                </div>
              </div>
              <div className="h-px bg-black w-full my-[20px] md:my-[28px]"></div>
              <p className="text-[16px] leading-6 md:text-[18px] md:leading-8">
                {experience}
              </p>
            </div>
          ))}
        </div>
        <div className="py-[50px] flex justify-end">
          <LinkBtn mode="primary" link="#" className={"md:w-fit"}>
            See all team
          </LinkBtn>
        </div>
      </div>
    </section>
  );
};

export default Team;
