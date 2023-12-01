import logoHeader from "../../assets/icons/logoHeader.svg";
import arrowRightIcon from "../../assets/icons/arrowRightIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import { SubheadComponentProps } from "../../types/SubheadComponentProps";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../redux/app/store";
// import { useState } from "react";
// import { searchProductsByTitle } from "../../redux/features/search/searchSlice";

import AnimatedDiv from "../../animations/AnimatedDiv";

const SubheadComponent: React.FC<SubheadComponentProps> = ({
  mainLabel,
  isSearch,
}) => {
  // const dispatch = useDispatch<AppDispatch>();
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  //   dispatch(searchProductsByTitle(e.target.value));
  // };

  return (
    <section className="bg-hero-subhead bg-no-repeat bg-center bg-cover w-full mr-0 lg:mr-[58px] pb-[37px] px-4 flex flex-col items-center lg:items-start">
      <AnimatedDiv className="max-w-[1290px] mx-auto px-4 h-80 flex flex-col justify-center items-center gap-3 ">
        <img
          src={logoHeader}
          alt="Furniro Logo"
          className="w-[77px] h-[77px]"
        />
        <h2 className="font-medium text-5xl tracking-wider">{mainLabel}</h2>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-base font-Poppins font-medium">Home</p>
          <img
            src={arrowRightIcon}
            alt="Arrow Icon"
            className="h-8 w-[20px] height-[20px]"
          />
          <p className="text-base font-Poppins font-light">{mainLabel}</p>
        </div>
        {isSearch && (
          <div className="flex items-center border-b bg-[#fff] rounded-xl border-gray-200 py-2">
            <input
              className="appearance-none bg-[transparent] border-none w-full text-gray-700 mr-3 py-1 px-3 leading-tight focus:outline-none"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="flex-shrink-0 text-gray-700 mr-3" type="button">
              <img src={searchIcon} className="w-[20px]" />
            </button>
          </div>
        )}
      </AnimatedDiv>
    </section>
  );
};

export default SubheadComponent;
