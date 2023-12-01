import React from "react";
import { BsCart4 } from "react-icons/bs";

interface EmptyCartProps {
  navigateToShop: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ navigateToShop }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <p className="py-4 font-Poppins text-lg">Your cart is empty.</p>
        <BsCart4 className="large-cart-icon mx-auto" />

        <button
          onClick={navigateToShop}
          className="mt-4 font-Poppins flex items-center justify-center mx-auto font-normal text-[#B88E2F]"
        >
          Go to Shop
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
