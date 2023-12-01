import { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import furnitureImg from "../../assets/images/sofaImg.svg";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import linkedinIcon from "../../assets/icons/linkedinIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import { ProductTypes } from "../../types/ProductsTypes";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/app/store";
import { addItemToCart } from "../../redux/features/cart/cartSlice";
import { FaStar, FaRegStar } from "react-icons/fa";

type ProductTabsProps = {
  product: ProductTypes;
};
const SlickSliderWithThumbs: FC<ProductTabsProps> = ({ product }) => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const slider1 = useRef<any>();
  const slider2 = useRef<any>();
  const [mainImage, setMainImage] = useState(furnitureImg);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState<number>(1);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // here manipulating the stars for rating
  const renderStars = () => {
    let stars = [];
    const rating = 4;
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  // add to cart
  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: quantity,
    };

    dispatch(addItemToCart(productWithQuantity));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, [slider1, slider2]);

  useEffect(() => {
    if (product.productImages && product.productImages.length > 0) {
      setMainImage(product.productImages[0]);
    }
  }, [product]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    infinite: false,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    infinite: false,
  };

  const handleThumbnailClick = (index: number) => {
    if (product.productImages && product.productImages.length > index) {
      setMainImage(product.productImages[index]);
      setActiveThumbnailIndex(index);
    }
  };

  return (
    <div className="flex justify-center items-start flex-col md:flex-row mx-auto py-8 border-b overflow-hidden">
      <div className="w-[60px] h-[0px] lg:w-[100px] lg:h-[100px] ml-4 lg:ml-0 pr-0">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider2}
          className="slider-thumbnails"
        >
          {product.productImages &&
            product.productImages.map((image, index) => (
              <div
                key={index}
                className={`bg-[#F9F1E7] rounded-lg mb-6 ${
                  index === activeThumbnailIndex ? "active-thumbnail" : ""
                }`}
              >
                <img
                  src={image}
                  alt="Thumbnail"
                  className="w-[60px] h-[60px]  lg:w-[100px] lg:h-[100px] object-cover rounded-lg"
                  onClick={() => handleThumbnailClick(index)}
                />
              </div>
            ))}
        </Slider>
      </div>
      <div className="max-h-[200px] lg:w-[450px] lg:ml-4 lg:max-h-[720px] lg:pl-0 pl-[100px] items-center justify-center">
        <Slider {...settingsMain} asNavFor={nav2} ref={slider1}>
          <div>
            <img
              src={mainImage}
              alt="Furniture"
              className="w-[230px] h-[320px] lg:w-[450px] lg:h-[720px] rounded-lg"
            />
          </div>
        </Slider>
      </div>
      {/* Product details right section */}
      <div className="lg:pl-[60px] lg:pt-0 pt-[180px] pb-9">
        {product ? (
          <div className="max-w-xl mx-auto p-4">
            <h2 className="text-[42px] font-Poppins font-normal mb-2">
              {product.title}
            </h2>
            <p className="text-2xl font-Poppins font-normal mb-4 text-[#9F9F9F]">
              ${product.costPrice}
            </p>
            <div className="flex items-center mb-4 flex-row">
              {/* Star rating */}
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2 pr-3 flex flex-row">
                  {/* My stars */}
                  {renderStars()}
                </span>
                <span className="text-[#9F9F9F] border-l pl-5 border-[#9F9F9F] font-Poppins text-sm font-normal">
                  5 Customer Review
                </span>
              </div>
            </div>
            <p className="mb-4 pr-4 font-Poppins text-sm font-normal leading-6">
              {product.subTitle}
            </p>
            {/* Size options */}
            <div className="mb-6">
              <span className="text-[#9F9F9F] font-Poppins text-sm font-normal">
                Size
              </span>
              <div className="flex space-x-3 mt-2">
                {product?.size?.map((size) => (
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
            </div>
            {/* Color options */}
            <div className="mb-6">
              <span className="text-[#9F9F9F] font-Poppins text-sm font-normal">
                Color
              </span>
              <div className="flex space-x-3 mt-2">
                {product?.color?.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 border-white ${
                      selectedColor === color ? "border-3 border-[#333]" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                  ></button>
                ))}
              </div>
            </div>
            {/* Quantity and add to cart */}
            <div className="flex items-center space-x-4 mb-16">
              <div className="border border-[#9F9F9F] rounded-lg lg:w-32 lg:h-14 h-10 flex items-center justify-center space-x-6">
                <button className="px-3 py-1" onClick={decrementQuantity}>
                  -
                </button>
                <span>{quantity}</span>
                <button className="px-3 py-1" onClick={incrementQuantity}>
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className=" border border-[#000] rounded-xl lg:w-52 lg:h-14 lg:px-6 px-3 py-2 ml-3"
              >
                Add To Cart
              </button>
            </div>

            {/* Product meta */}
            <div className="border-t border-[#D9D9D9] pt-10 space-x-6 text-[#9F9F9F] font-Poppins font-normal text-base flex flex-row">
              <div className="flex flex-col space-y-6">
                <span>SKU </span>
                <span>Category </span>
                <span>Tags </span>
                <span>Share </span>
              </div>
              <div className="flex flex-col space-y-6 ">
                <span>: SS001</span>
                <span>: Sofas</span>
                <span>: Sofa, Chair, Home, Shop</span>
                <div className="flex flex-row space-x-6">
                  <img src={facebookIcon} alt="" />
                  <img src={linkedinIcon} alt="" />
                  <img src={twitterIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default SlickSliderWithThumbs;
