import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { RoomTypes } from "../../types/RoomTypes";
import roomInspImg1 from "../../assets/images/roomsImg1.svg";
import arrowright from "../../assets/images/arrowright.svg";
import AnimatedDiv from "../../animations/AnimatedDiv";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const roomData: RoomTypes[] = [
  {
    id: "1",
    title: "Inner Peace",
    category: "Bed Room",
    image: roomInspImg1,
    index: "1",
  },
  {
    id: "2",
    title: "Inner Peace",
    category: "Bed Room",
    image: roomInspImg1,
    index: "2",
  },
  {
    id: "3",
    title: "Inner Peace",
    category: "Bed Room",
    image: roomInspImg1,
    index: "3",
  },
  {
    id: "4",
    title: "Inner Peace",
    category: "Bed Room",
    image: roomInspImg1,
    index: "4",
  },
];
const RoomInspirationComponent: FC = () => {
  const [activeSlide, setActiveSlide] = useState<string>(roomData[0].id);
  const [isNotFirstSlide, setIsNotFirstSlide] = useState<boolean>(false);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setActiveSlide(roomData[current].id);
      setIsNotFirstSlide(current > 0);
    },
    beforeChange: (newIndex: number) => setActiveSlide(roomData[newIndex].id),

    customPaging: (i: number) => (
      <div
        className={`slick-dot ${
          activeSlide === roomData[i].id ? "slick-active" : ""
        }`}
      >
        <div className="dot-inner"></div>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <AnimatedDiv className="h-full bg-[#FCF8F3]">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="max-w-[100%] lg:max-w-[100%] items-start justify-center mx-4 lg:ml-14 flex  flex-col ">
          <h2 className="font-Poppins text-[19px] lg:text-4xl font-semibold mb-4 pt-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mb-6 font-Poppins text-sm lg:text-base font-medium text-[#616161]">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you
          </p>
          <button className="bg-[#B88E2F] text-white font-bold py-3 px-9 rounded hover:bg-yellow-600 transition duration-300">
            Explore More
          </button>
        </div>
        <div className="lg:max-w-[70%] py-12 relative overflow-hidden ">
          <Slider
            ref={sliderRef}
            className="mr-3 lg:space-x-4 h-[510px] relative"
            {...settings}
          >
            {roomData.map((slide) => {
              const isActive = slide.id === activeSlide;
              return (
                <div
                  key={slide.id}
                  className="item relative overflow-hidden px-4"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`${
                      slide.id === activeSlide ? "h-[500px]" : "h-[450px]"
                    } max-w-[400px] transition-all duration-300`}
                  />
                  {isActive && (
                    <div className="absolute bottom-10 left-10 w-[200px] bg-white bg-opacity-75 px-8 py-9">
                      <p className="text-gray-800 text-sm uppercase tracking-widest">
                        {slide.index} — {slide.category}
                      </p>
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {slide.title}
                      </h3>
                      <div className="absolute right-[-20%]  bottom-0 bg-[#B88E2F] p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Slider>
          {/* Right Swipe Button */}
          <button
            className="absolute right-[3%] top-[50%] transform -translate-y-1/2"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img src={arrowright} alt="Next" />
          </button>
          {/* Left Swipe Button */}
          {isNotFirstSlide && (
            <button
              className="absolute left-[3%] top-[49%] transform -translate-y-1/2"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <img
                src={arrowright}
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default RoomInspirationComponent;
