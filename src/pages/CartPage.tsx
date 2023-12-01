import { FC } from "react";
import SubheadComponent from "../components/reusable/SubheadComponent";
import FeaturesBarComponent from "../components/reusable/FeaturesBarComponent";
import CartLayout from "../components/cart/CartLayout";
import AnimatedPage from "../animations/AnimatedPage";

const CartPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel={"Cart"} />
      <CartLayout />
      <FeaturesBarComponent />
    </AnimatedPage>
  );
};

export default CartPage;
