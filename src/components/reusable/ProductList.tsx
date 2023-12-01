// import { useSelector } from "react-redux";
import AnimatedDiv from "../../animations/AnimatedDiv";
import { ProductTypes } from "../../types/ProductsTypes";
import ProductCard from "../reusable/ProductCard";
// import { RootState } from "../../redux/app/store";

import React from "react";
// import ShopLoadingComponent from "./ShopLoadingComponent";

type ProductListProps = {
  items: ProductTypes[];
};

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  // const productsStatus = useSelector(
  //   (state: RootState) => state.products.status
  // );
  // if (productsStatus === "loading") {
  //   return <ShopLoadingComponent />;
  // }

  return (
    <div className="h-full cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {items.map((item) => (
        <AnimatedDiv key={item.id}>
          <ProductCard item={item} />
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default React.memo(ProductList);
