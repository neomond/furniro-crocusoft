import { FC } from "react";
import { Link } from "react-router-dom";
import AnimatedDiv from "../../animations/AnimatedDiv";

const FooterComponent: FC = () => {
  return (
    <AnimatedDiv className="pt-12 pb-9">
      <div className="max-w-[1290px] mx-auto lg:pr-24 ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pl-4 sm:pl-0">
          <div>
            <p className="font-bold text-2xl pb-12">Furniro.</p>
            <div>
              <p className="font-light text-[#9F9F9F]">
                400 University Drive Suite 200 Coral Gables,
              </p>
              <p className="font-light text-[#9F9F9F]">FL 33134 USA</p>
            </div>
          </div>

          <div className="flex flex-col mt-8 lg:mt-0 lg:ml-12">
            <p className="font-medium text-lg pb-12 text-[#9F9F9F]">Links</p>
            <div className="flex flex-col space-y-1 gap-4 lg:gap-[46px]">
              <Link to="/" className="hover:text-[#B88E2F]">
                Home
              </Link>
              <Link to="/" className="hover:text-[#B88E2F]">
                Shop
              </Link>
              <Link to="/" className="hover:text-[#B88E2F]">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-[#B88E2F]">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-8 lg:mt-0">
            <p className="font-medium text-lg pb-12 text-[#9F9F9F]">Help</p>
            <div className="flex flex-col space-y-1 gap-4 lg:gap-[46px]">
              <a href="/" className="hover:text-[#B88E2F]">
                Payment Options
              </a>
              <a href="/" className="hover:text-[#B88E2F]">
                Returns
              </a>
              <a href="/" className="hover:text-[#B88E2F]">
                Shipping
              </a>
            </div>
          </div>

          <div className="flex flex-col mt-8 lg:mt-0 ">
            <p className="font-medium text-lg pb-12 text-[#9F9F9F]">
              Newsletter
            </p>
            <form className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-5">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="font-light border-b border-black outline-none py-1 min-w-[200px] text-sm"
              />
              <button className="border-b border-black hover:text-[#B88E2F] outline-none text-sm py-1">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-black font-normal text-base leading-6 border-t pt-9 border-[#D9D9D9]">
          © 2023 Furniro. All rights reserved
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default FooterComponent;
