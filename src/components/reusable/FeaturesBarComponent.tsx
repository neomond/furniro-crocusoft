import trophyIcon from "../../assets/icons/trophyIcon.svg";
import warrantyIcon from "../../assets/icons/warrantyIcon.svg";
import shippingIcon from "../../assets/icons/shippingIcon.svg";
import supportIcon from "../../assets/icons/customer-supportIcon.svg";
import AnimatedDiv from "../../animations/AnimatedDiv";

function FeaturesBarComponent() {
  return (
    <div className="px-4 sm:px-8 bg-[#FAF3EA] py-8 sm:py-[50px] md:py-[100px] mb-4 sm:mb-8">
      <AnimatedDiv className="px-2 sm:px-6 md:px-12 lg:px-10 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 md:gap-12">
        {/* Feature 1 */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <img
            src={trophyIcon}
            alt="High Quality"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
          />
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-Poppins">
              High Quality
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#898989] font-Poppins">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <img
            src={warrantyIcon}
            alt="Warranty Protection"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
          />
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-Poppins">
              Warranty Protection
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#898989] font-Poppins">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <img
            src={shippingIcon}
            alt="Free Shipping"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
          />
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-Poppins">
              Free Shipping
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#898989] font-Poppins">
              Order over $150
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <img
            src={supportIcon}
            alt="24/7 Support"
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px]"
          />
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-semibold font-Poppins">
              24/7 Support
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal text-[#898989] font-Poppins">
              Dedicated support
            </p>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

export default FeaturesBarComponent;
