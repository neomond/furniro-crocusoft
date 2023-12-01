import { FC } from "react";
// import prodImg from "../../assets/images/sofaImg.svg";
import deleteIcon from "../../assets/icons/deleteicon.svg";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  // updateItemQuantity,
} from "../../redux/features/cart/cartSlice";
const CartLayout: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // const handleQuantityChange = (id: string, quantity: number) => {
  //   dispatch(updateItemQuantity({ id, quantity }));
  // };

  // Calculate total for all items in the cart
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <section className="max-w-[1290px] mx-auto py-16">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Container */}
        {cartItems.length === 0 ? (
          <div className="text-center flex mx-auto py-12 justify-center items-center mx-a flex-col">
            <p className="text-2xl pb-2 font-Poppins font-medium">
              Your cart is empty
            </p>
            <Link
              to="/shop"
              className="font-Poppins font-normal text-[#B88E2F]"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="relative overflow-x-auto lg:overflow-hidden w-full mr-12">
              <table className="w-full">
                <thead className="w-full bg-[#F9F1E7] h-14">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cartItem) => (
                    <tr
                      key={cartItem.id}
                      className="w-full overflow-x-scroll h-[15vh]"
                    >
                      <td>
                        <div className="flex items-center justify-center">
                          <img
                            src={cartItem.img}
                            alt="cart item image"
                            className="rounded-xl w-20 h-20"
                          />
                        </div>
                      </td>
                      <td className="text-[#9F9F9F] text-base">
                        {cartItem.title}
                      </td>
                      <td className="text-[#9F9F9F] text-base text-center">
                        {`$ ${cartItem.price}`}
                      </td>
                      <td>
                        <span className="border border-[#9F9F9F] w-6 h-6 py-1 px-3 rounded-md mx-auto flex items-center justify-center select-none">
                          1
                        </span>
                      </td>
                      <td className="text-black font-medium text-base">
                        Rs. 250,000.00
                      </td>
                      <td>
                        <span className="w-6 h-6 bg-[#B88E2F] text-[12px] select-none rounded-md py-1 px-3 flex items-center justify-center uppercase text-white mx-auto">
                          xl
                        </span>
                      </td>
                      <td>
                        <span className="block w-6 h-6 bg-[#9F9F9F] rounded-full mx-auto"></span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartItem.id)}
                          className="block mx-auto"
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Container */}
            <div className="bg-[#F9F1E7] max-h-[350px]">
              <h2 className="lg:px-[100px] px-[50px] pt-4 pb-14 font-Poppins text-2xl lg:text-3xl text-center font-semibold justify-center align-middle">
                Cart Totals
              </h2>
              <div className="flex flex-col items-center justify-start space-y-6 mb-[42px]">
                <div className="flex flex-row space-x-6 lg:space-x-12">
                  <p className="font-Poppins font-medium text-sm lg:text-base pr-2">
                    Subtotal
                  </p>
                  <p className="text-[#9F9F9F] text-sm lg:text-base font-normal">{`$ ${calculateTotal()}`}</p>
                </div>
                <div className="flex items-start flex-row space-x-6 lg:space-x-12">
                  <p className="font-Poppins font-medium text-sm lg:text-base">
                    Total
                  </p>
                  <p className="text-[#B88E2F] font-Poppins font-medium text-base lg:text-xl ">
                    {`$ ${calculateTotal()}`}
                  </p>
                </div>
              </div>
              <Link
                to="/checkout"
                className="flex items-center justify-center mb-10 "
              >
                <button className="border py-2 px-[30px] lg:py-[14px] lg:px-[60px]  hover:bg-yellow-600 hover:text-[#fff] transition-all duration-300 hover:border-none rounded-2xl border-[#000] lg:text-xl text-base font-Poppins font-normal">
                  Check Out
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartLayout;
