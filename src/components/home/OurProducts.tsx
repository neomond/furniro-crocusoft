import { FC, useEffect, useState } from "react";
import prodImage1 from "../../assets/images/prodImage 1.svg";
import { ProductTypes } from "../../types/ProductsTypes";

import ProductList from "../reusable/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/store";
import { fetchProducts } from "../../redux/features/products/productsSlice";

export const items: ProductTypes[] = [
  {
    id: "1",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: true,
    isNew: true,
    noLabel: false,
  },
  {
    id: "2",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    discount: 35000,
    price: 2500000,
    related: true,
    isNew: false,
    noLabel: true,
  },
  {
    id: "3",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: true,
    isNew: true,
    noLabel: false,
  },
  {
    id: "4",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: false,
    noLabel: false,
  },
  {
    id: "5",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: true,
  },
  {
    id: "6",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: true,
    isNew: false,
    noLabel: false,
  },
  {
    id: "7",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: false,
    noLabel: false,
  },
  {
    id: "8",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: true,
  },
  {
    id: "9",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: true,
  },
  {
    id: "10",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "11",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "12",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "13",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "14",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "15",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
  {
    id: "16",
    img: prodImage1,
    title: "Dining",
    subTitle: "Stylish cafe chair",
    price: 2500000,
    discount: 35000,
    related: false,
    isNew: true,
    noLabel: false,
  },
];

const OurProducts: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [displayCount, setDisplayCount] = useState<number>(8);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
  };
  const handleShowLess = () => {
    setDisplayCount(8);
  };
  const allItemsDisplayed = displayCount >= products.length;

  return (
    <section className="max-w-[1290px] mx-auto pt-[40px] py-[48px] items-center  px-3">
      <h2 className="text-[32px] pb-[32px] flex justify-center font-bold">
        Our Products
      </h2>
      <ProductList items={products.slice(0, displayCount)} />
      <div className="flex justify-center pt-[44px] items-center">
        {/* Here showing each time  +4 card items*/}
        {!allItemsDisplayed && (
          <button
            onClick={handleShowMore}
            className="border border-[#B88E2F] py-[12px] px-[74px]  hover:bg-yellow-600 hover:text-[#fff] transition-all duration-300  text-[#B88E2F] font-Poppins text-sm mx-2"
          >
            Show More
          </button>
        )}
        {/* Here display only show less button when all card items are displayed */}
        {displayCount > 8 && (
          <button
            onClick={handleShowLess}
            className="border border-[#B88E2F] py-[12px] px-[74px] text-[#B88E2F] font-Poppins text-sm mx-2"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default OurProducts;
