import AnimatedDiv from "../../animations/AnimatedDiv";
function HeroComponent() {
  return (
    <section className="bg-primary-hero-main bg-cover h-screen bg-fixed bg-no-repeat bg-center flex items-center justify-end text-black ">
      <AnimatedDiv
        viewport={{ once: true }}
        className="bg-[#FFF3E3] lg:w-5/12 w-full mr-0 rounded-lg lg:mr-[58px] pt-[62px] pb-[37px] px-4 lg:pl-[40px] flex flex-col items-center lg:items-start"
      >
        <p className="tracking-widest font-semibold pb-1 text-center lg:text-left">
          New Arrival
        </p>
        <h1 className="text-4xl lg:text-[50px] font-bold text-[#B88E2F] pb-4 font-Poppins leading-tight lg:leading-[65px] w-full lg:w-[80%] text-center lg:text-left">
          Discover Our New Collection
        </h1>
        <p className="text-[#333333] text-lg lg:text-[18px] font-medium mb-12 leading-6 w-full lg:w-[480px] text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] hover:bg-yellow-600 transition-all duration-300 uppercase font-bold text-lg  w-[222px] py-4 lg:py-[25px] cursor-pointer text-white border-0">
          Buy Now
        </button>
      </AnimatedDiv>
      {/* </div> */}
    </section>
  );
}

export default HeroComponent;
