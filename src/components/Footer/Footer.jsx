import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import { NavbarSettings } from "../Navbar/NavbarSettings";
import PositivusLogo from "../../assets/positivus.svg?react";
import { socialIcons } from "./FooterSettings";
import Romb from "../../assets/romb.svg?react";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    reset();
  };

  return (
    <footer
      id="footer"
      className="w-full px-0 scroll-mt-5 bg-[#191a23] lg:bg-transparent"
    >
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="px-5 pt-[50px] pb-[30px] mx-auto md:px-[40px] lg:px-[60px] bg-[#191a23] rounded-[45px_45px_0px_0px] xl:p-[55px_60px_50px_60px]">
          <div className="flex w-full flex-col gap-[37px] lg:gap-[66px]">
            <div className="grid grid-cols-1 lg:flex lg:justify-between items-center gap-y-5">
              <a
                href="/"
                className="flex justify-center lg:justify-start items-center gap-3"
              >
                <Romb className="text-white" />
                <PositivusLogo className="text-white max-w-[140px] xl:max-w-[160px]" />
              </a>

              <nav className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-5">
                {NavbarSettings.map(({ page, link }) => (
                  <a
                    href={`${link}`}
                    key={page}
                    className="text-lg px-2  text-center text-white transition-all duration-300 ease-in-out hover:text-black hover:scale-110 rounded-[9px] hover:bg-[#b9ff66]"
                  >
                    {page}
                  </a>
                ))}
                <div className="hidden lg:flex items-center gap-5">
                  {socialIcons.map(({ link, src, alt }, index) => (
                    <a href={link} key={index}>
                      <img className="w-8 h-8" src={src} alt={alt} />
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] md:gap-x-10 lg:gap-x-16 xl:gap-x-24">
              <div className="flex flex-col items-center lg:items-start gap-5">
                <h4 className="rounded-[7px] mb-3 px-2 bg-[#b9ff66]">
                  Contact us:
                </h4>
                <a
                  href="mailto:info@positivus.com"
                  className="text-[#fff] text-base lg:text-lg transition-colors duration-300 hover:text-[#B9FF66]"
                >
                  Email: info@positivus.com
                </a>
                <a
                  href="tel:555-567-8901"
                  className="text-[#fff] text-base lg:text-lg  transition-colors duration-300 hover:text-[#B9FF66]"
                >
                  Phone: 555-567-8901
                </a>
                <a
                  href="https://maps.app.goo.gl/NjxKmv7rr4tEjjyWA?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fff] text-base lg:text-lg  transition-colors duration-300 hover:text-[#B9FF66]"
                >
                  Address: 1234 Main St Moonstone City, Stardust State 12345
                </a>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-4 p-8 md:px-5 md:py-9 lg:px-8 lg:py-14 xl:px- xl:py-20 bg-[#292a32] rounded-[14px]"
              >
                <div>
                  <input
                    {...register("email", {
                      pattern: {
                        value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email address must be valid",
                      },
                    })}
                    className="w-full h-[50px] md:h-[60px] lg:h-[68px] py-[14px] px-[25px] lg:px-[35px] rounded-[14px] border border-[#fff] bg-[#292A32] text-white"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <Button
                  mode="secondary"
                  className="w-full lg:w-auto h-[50px] md:h-[60px] lg:h-[68px]"
                >
                  Subscribe to news
                </Button>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
                {isSubscribed && (
                  <p className="text-[#b9ff66] text-sm mt-2 lg:col-span-2">
                    Your subscription is successful!
                  </p>
                )}
              </form>
            </div>

            <div className="flex lg:hidden justify-center w-8 h-8 gap-5 mt-5">
              {socialIcons.map(({ link, src, alt }, index) => (
                <a href={link} key={index}>
                  <img className="w-8 h-8" src={src} alt={alt} />
                </a>
              ))}
            </div>

            <div className="w-full h-px bg-white"></div>

            <div className="flex flex-col items-center justify-between lg:justify-start lg:flex-row lg:items-start lg:gap-10">
              <p className="text-[#fff]">
                © 2023 Positivus. All Rights Reserved.
              </p>
              <p className="text-[#fff] transition-colors duration-300 hover:underline decoration-solid">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
