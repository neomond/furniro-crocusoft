import { FC } from "react";
import rightIcon from "../../assets/icons/arrowRightIcon.svg";
import { ProductTypes } from "../../types/ProductsTypes";

type ProductTabsProps = {
  product: ProductTypes;
};

const TabForDetails: FC<ProductTabsProps> = ({ product }) => {
  return (
    <section className="max-w-full lg:px-[70px] py-8 bg-[#F9F1E7]">
      <div className="flex flex-row space-x-4">
        <div className="flex flex-row  pl-6 space-x-3">
          <p className="text-[#9F9F9F] font-normal font-Poppins text-base">
            Home
          </p>
          <img src={rightIcon} alt="Right Icon" />
        </div>
        <div className="flex flex-row  space-x-3">
          <p className="text-[#9F9F9F] font-normal font-Poppins text-base">
            Shop
          </p>
          <img src={rightIcon} alt="Right Icon" />
        </div>
        <div className="border-l border-[#9F9F9F]">
          <p className="pl-6 font-normal font-Poppins text-base">
            {product.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TabForDetails;
