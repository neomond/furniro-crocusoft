import { FC } from "react";
import gridImg1 from "../../assets/images/grid/gridImg1.svg";
import gridImg2 from "../../assets/images/grid/gridImg2.svg";
import gridImg3 from "../../assets/images/grid/gridImg3.svg";
import gridImg4 from "../../assets/images/grid/gridImg4.svg";
import gridImg5 from "../../assets/images/grid/gridImg5.svg";
import gridImg6 from "../../assets/images/grid/gridImg6.svg";
import gridImg7 from "../../assets/images/grid/gridImg7.svg";
import gridImg8 from "../../assets/images/grid/gridImg8.svg";
import gridImg9 from "../../assets/images/grid/gridImg9.svg";
import AnimatedDiv from "../../animations/AnimatedDiv";

const GalleryComponent: FC = () => {
  return (
    <AnimatedDiv>
      <div className="pt-12 max-w-[1290px] mx-auto flex flex-col items-center ">
        <p className="font-Poppins font-normal text-xl text-[#616161]">
          Share your setup with
        </p>
        <h2 className="font-Poppins font-medium sm:text-3xl lg:text-4xl text-[#3A3A3A]">
          #FurniroFurniture
        </h2>
      </div>
      {/* <div className="grid grid-cols-5 md:grid-cols-5 gap-4"> */}
      <div className="flex flex-row  overflow-hidden border-b pb-14 w-full">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <div
              style={{ backgroundImage: `url(${gridImg1})` }}
              className="bg-cover bg-center bg-no-repeat w-[104px] h-[382px] "
            />
            <div
              style={{ backgroundImage: `url(${gridImg3})` }}
              className="bg-cover bg-center bg-no-repeat mt-[13%] w-[431px] h-[312px] flex "
            />
          </div>
          <div className="flex flex-row space-x-4">
            <div
              style={{ backgroundImage: `url(${gridImg2})` }}
              className="bg-cover bg-center bg-no-repeat w-[190px] h-[323px]"
            />
            <div
              style={{ backgroundImage: `url(${gridImg4})` }}
              className="bg-cover bg-center bg-no-repeat w-[344px] h-[242px]"
            />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${gridImg5})` }}
          className="bg-cover bg-center bg-no-repeat w-[295px] h-[392px] mx-4 flex mt-[8%]"
        />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row">
            <div className="flex flex-col ">
              <div
                style={{ backgroundImage: `url(${gridImg6})` }}
                className="bg-cover bg-center bg-no-repeat w-[270px] mt-[29%] h-[348px] mr-4"
              />
            </div>
            <div
              style={{ backgroundImage: `url(${gridImg8})` }}
              className="bg-cover bg-center bg-no-repeat w-[290px] h-[433px] "
            />
          </div>
          <div className="flex flex-row  space-x-4">
            <div
              style={{ backgroundImage: `url(${gridImg7})` }}
              className="bg-cover bg-center bg-no-repeat w-[178px] h-[242px] "
            />
            <div
              style={{ backgroundImage: `url(${gridImg9})` }}
              className="bg-cover bg-center bg-no-repeat w-[258px] h-[196px] "
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default GalleryComponent;
