import { ProductCardProps, ProductTypes } from "../../types/ProductsTypes";
import shareIcon from "../../assets/icons/share.svg";
import favoritesIcon from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/store";
import { addFavorite } from "../../redux/features/favorites/favoritesSlice";
import { addItemToCart } from "../../redux/features/cart/cartSlice";
import { BsHeartFill } from "react-icons/bs";

import React, { FC, memo, useCallback, useMemo, useState } from "react";
import SuccessModal from "./SuccessModal";
import GenericModal from "./CartModal";

// useMemo returns the memoized value, and useCallback returns the memoized function.
const ProductImage: FC<{ src: string; title: string }> = memo(
  ({ src, title }) => (
    <img
      src={src}
      alt={title}
      className="max-h-[380px] h-auto w-full object-cover"
    />
  )
);

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isLiked = useMemo(() => {
    return favorites.some(
      (favoriteItem: ProductTypes) => favoriteItem.id === item.id
    );
  }, [favorites, item.id]);

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isGenericModalOpen, setGenericModalOpen] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const [quantity, setQuantity] = useState<number>(1);

  const renderColorButton = (color: string) => {
    const isSelected = selectedColor === color;
    return (
      <button
        key={color}
        className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
          isSelected ? "border-3 border-[#333]" : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => handleColorSelect(color)}
      >
        {isSelected && <span className="text-white text-xs">✓</span>}
      </button>
    );
  };
  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(addFavorite(item));
    },
    [dispatch, item]
  );

  const handleAddToCartClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setGenericModalOpen(true);
  }, []);

  const handleAddItemToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addItemToCart({ ...item, quantity: 1 }));
    setGenericModalOpen(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <Link to={`/products/${item.id}`} className="relative overflow-hidden ">
        <div>
          <ProductImage src={item.img} title={item.title} />
        </div>
        {(item?.discountPercent ?? 0) > 0 && (
          <span className="absolute top-6 right-4 sm:top-8 sm:right-6 w-12  h-8 rounded-full bg-[#E97171] flex items-center justify-center text-white font-medium text-sm sm:text-sm">
            -{item.discountPercent}%
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-6 right-4 sm:top-8 sm:right-6 w-12  h-8 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium text-sm sm:text-sm">
            New
          </span>
        )}
        <div className="absolute h-full w-full bg-[#3A3A3A]/70 flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
          <div>
            <button
              onClick={handleAddToCartClick}
              className="bg-white w-[202px] block mb-6 mx-auto opacity-100 text-[#B88E2F] hover:bg-yellow-600 hover:text-[#fff] transition-all duration-300  font-bold text-[16px] leading-6 py-[12px]"
            >
              Add to cart
            </button>

            <div className="flex items-center justify-center gap-5 mt-[24px]">
              <div className="flex items-center gap-1 font-semibold text-[1rem] leading-6 text-white">
                <img src={shareIcon} alt="" /> <span>Share</span>
              </div>
              <div
                role="button"
                onClick={handleFavoriteClick}
                className="flex items-center gap-1 font-semibold text-[1rem] leading-6 text-white"
              >
                {isLiked ? (
                  <BsHeartFill className="liked-icon" />
                ) : (
                  <img src={favoritesIcon} alt="" />
                )}
                <span>{isLiked ? "Liked" : "Like"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-[16px]  pb-8 bg-[#F4F5F7]">
          <Link to="/">
            <h1 className="text-[#3A3A3A] font-bold text-lg sm:text-xl leading-tight mb-2">
              {item.title}
            </h1>
          </Link>
          <p className="text-[#898989] font-medium text-sm sm:text-base">
            {item.subTitle}
          </p>

          <div className="mt-2 sm:mt-4 flex gap-2 sm:gap-4">
            <span className="text-[#3A3A3A] font-bold text-lg sm:text-xl">
              $ {item.costPrice}
            </span>
            {!item.isNew && item.salePrice !== 0 && (
              <span className="text-[#B0B0B0] font-normal text-sm sm:text-base leading-6 line-through">
                $ {item.salePrice}
              </span>
            )}
          </div>
        </div>
        <SuccessModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          message={`${item.title} added to cart!`}
        />
      </Link>
      {/* Generic modal */}
      <GenericModal
        isOpen={isGenericModalOpen}
        onClose={() => setGenericModalOpen(false)}
      >
        <div className="px-6 py-3">
          <p className="font-Poppins text-lg pb-11 text-center">
            Add this item to your cart?
          </p>
          <div className="flex flex-row gap-2 mb-6">
            <img src={item.img} className="w-[120px] h-[120px] rounded-md" />
            <div className="ml-4 space-y-4">
              <p>{item.title}</p>
              <div className="flex flex-row space-x-3">
                {item?.size?.map((size) => (
                  <button
                    key={size}
                    className={`rounded-md w-8 h-8 font-Poppins text-sm font-normal ${
                      selectedSize === size
                        ? "bg-[#B88E2F] text-[#fff]"
                        : "bg-[#F9F1E7]"
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex space-x-3 mt-2">
                {item?.color?.map(renderColorButton)}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="border border-[#9F9F9F] rounded-lg lg:w-32 lg:h-12 h-12 flex items-center justify-center space-x-6">
              <button className="px-3 py-1" onClick={decrementQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-3 py-0" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <button
              className="bg-[#B88E2F] w-[202px] block mb-6 mx-auto opacity-100 text-[#fff] hover:bg-[#F9F1E7] hover:text-[#B88E2F] transition-all duration-300  font-medium text-base leading-6 py-[12px]"
              onClick={handleAddItemToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </GenericModal>
    </>
  );
};

export default React.memo(ProductCard);
