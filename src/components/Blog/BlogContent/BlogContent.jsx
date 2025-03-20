import SarahImg from "../../../assets/emilyv.png";
import { BlogContentSettings } from "./BlogContentSettings";
import Star from "../../../assets/start-black.svg";

const BlogContent = () => {
  return (
    <section id="blog-content" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex justify-between mt-6 lg:mt-0 lg:px-10">
          <div className="flex gap-[10px]">
            <img
              src={SarahImg}
              alt="Sarah Kim"
              className="w-[56px] h-[60px] lg:w-[74px] lg:h-[80px]"
            />
            <div className="flex flex-col justify-center">
              <h4 className="text-lg lg:text-xl">Sarah Kim</h4>
              <p className="text-lg lg:text-xl">Content Creator</p>
            </div>
          </div>
          <div className="flex items-baseline justify-center mt-2">
            <p className="text-4xl text-[#908f8f]">A</p>
            <p className="text-3xl">A</p>
            <p className="text-2xl text-[#908f8f]">A</p>
          </div>
        </div>
        <hr className="w-full h-[2px] mt-6 mb-12 lg:my-10 bg-black" />
        <div className="lg:px-[185px]">
          <h4 className="text-lg lg:text-2xl font-medium mb-10 lg:mb-[70px] text-justify">
            In the ever-evolving digital landscape, businesses are faced with an
            important question: should they invest in pay-per-click (PPC)
            advertising or focus on organic marketing strategies? While both
            approaches have their merits, choosing the right one depends on your
            goals, budget, and timeline. Let’s dive into the strengths,
            challenges, and real-world applications of PPC and organic marketing
            to help you make an informed decision.
          </h4>
          {BlogContentSettings.map(
            ({ title, text, subText, greenText, parts, smallCards }, index) => (
              <div key={index} className="text-justify">
                {title && <h2 className="mb-5 lg:mb-[30px]">{title}</h2>}
                <div className="flex items-start">
                  {greenText && (
                    <div className="w-1 p-[2px] bg-[#B9FF66] self-stretch mr-5"></div>
                  )}
                  {greenText && (
                    <p className="text-[26px] font-light mb-10">{greenText}</p>
                  )}
                </div>

                <p className="mb-10 text-lg">{text}</p>
                {subText && <p className="mb-10 text-lg">{subText}</p>}
                <ul className="list-disc pl-[16px]">
                  {parts &&
                    parts.map((part, idx) => (
                      <li key={idx} className="text-lg text-[#555] mb-5">
                        {part}
                      </li>
                    ))}
                </ul>
                <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap lg:justify-between gap-5 w-full lg:mb-10">
                  {smallCards &&
                    smallCards.map(
                      (
                        {
                          title,
                          subTitle,
                          text,
                          subText,
                          specialTitle,
                          bg,
                          textColor,
                          titleColor,
                          border,
                          shadow,
                          additionTitle,
                        },
                        index
                      ) => (
                        <div
                          key={index}
                          className="flex flex-col px-[30px] py-10 rounded-[25px] gap-[15px] w-full"
                          style={{
                            backgroundColor: bg,
                            color: textColor || "#000",
                            border: border ? `1px solid ${border}` : "none",
                            boxShadow: shadow || "none",
                          }}
                        >
                          {specialTitle && (
                            <h4 className="text-3xl">{specialTitle}</h4>
                          )}
                          {text && <p className="text-lg">{text}</p>}
                          <div className="flex gap-[6px]">
                            <h4
                              className="text-3xl"
                              style={{
                                color: titleColor || textColor || "#000",
                              }}
                            >
                              {title}
                            </h4>
                            {additionTitle && (
                              <h4 className="text-3xl">{additionTitle}</h4>
                            )}
                          </div>
                          {subText && <p className="text-lg">{subText}</p>}
                          {subTitle && <h4 className="text-3xl">{subTitle}</h4>}
                        </div>
                      )
                    )}
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center items-center">
          <img src={Star} alt="Star icon" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
