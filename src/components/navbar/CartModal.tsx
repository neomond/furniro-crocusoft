import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/app/store";
import { removeItemFromCart } from "../../redux/features/cart/cartSlice";
import EmptyCart from "./EmptyCart";
import modalCartIcon from "../../assets/icons/cartIconModal.svg";
import closeIcon from "../../assets/icons/closeIcon.svg";

interface CartModalProps {
  isCartOpen: boolean;
  toggleCart: () => void;
  navigateToShop: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isCartOpen,
  toggleCart,
  navigateToShop,
}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white p-4 shadow-lg z-50 transform transition-transform duration-300 ${
        isCartOpen ? "" : "translate-x-full"
      }`}
    >
      {/* Cart Modal Content */}
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center border-b pb-6">
          <h2 className="font-semibold font-Poppins text-2xl">Shopping Cart</h2>
          <button onClick={toggleCart}>
            <img src={modalCartIcon} alt="Close Cart" />
          </button>
        </div>

        <div className="flex flex-col h-[95%] relative">
          <div className="overflow-y-scroll h-[83%]">
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((cartItem) => (
                  <Link
                    to={`/products/${cartItem.id}`}
                    key={cartItem.id}
                    className="flex flex-row my-5 items-center justify-between"
                  >
                    {/* Cart Item Display */}
                    <div className="flex flex-row items-center">
                      <img
                        src={cartItem.img}
                        alt={cartItem.title}
                        className="w-[100px] h-[100px] rounded-lg"
                      />
                      <div className="pl-4">
                        <p className="font-Poppins text-base font-normal pb-1">
                          {cartItem.title}
                        </p>
                        <p className="flex flex-row text-[#B88E2F] font-Poppins text-base font-medium items-center">
                          <span className="font-Poppins text-[#000] text-base font-normal flex items-center">
                            {cartItem.quantity} <span className="px-2">x</span>
                          </span>
                          {cartItem.price}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveItem(cartItem.id)}>
                      <img src={closeIcon} alt="Remove Item" />
                    </button>
                  </Link>
                ))}
                {/* Subtotal and Checkout */}
                <div className="absolute bottom-6 w-[100%]">
                  <div className="font-Poppins text-base font-normal flex flex-row justify-between pb-6 border-b">
                    <p>Subtotal</p>
                    <p className="text-[#B88E2F] font-medium">
                      {calculateSubtotal()}
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Link
                      to="/cart"
                      className="p-2 rounded-[50px] w-[87px] text-center border border-[#000]"
                    >
                      <button onClick={toggleCart}>Cart</button>
                    </Link>
                    <Link
                      to="/checkout"
                      className="p-2 rounded-[50px] w-[137px] text-center border border-[#000]"
                    >
                      <button onClick={toggleCart}>Checkout</button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <EmptyCart navigateToShop={navigateToShop} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
