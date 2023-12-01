import { FC } from "react";
import FeaturesBarComponent from "../components/reusable/FeaturesBarComponent";
import SubheadComponent from "../components/reusable/SubheadComponent";
import ShopLayout from "../components/shop/ShopLayout";
import ShopProducts from "../components/shop/ShopProducts";
import AnimatedPage from "../animations/AnimatedPage";

const ShopPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel="Shop" />
      <ShopLayout />
      <ShopProducts />
      <FeaturesBarComponent />
    </AnimatedPage>
  );
};

export default ShopPage;
