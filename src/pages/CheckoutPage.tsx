import { FC } from "react";
import SubheadComponent from "../components/reusable/SubheadComponent";
import FeaturesBarComponent from "../components/reusable/FeaturesBarComponent";
import CheckoutLayout from "../components/checkout/CheckoutLayout";
import AnimatedPage from "../animations/AnimatedPage";

const CheckoutPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel="Checkout" />
      <CheckoutLayout />
      <FeaturesBarComponent />
    </AnimatedPage>
  );
};

export default CheckoutPage;
