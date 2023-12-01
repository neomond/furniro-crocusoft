import { FC } from "react";
import SubheadComponent from "../components/reusable/SubheadComponent";
import FavoritesLayout from "../components/favorites/FavoritesLayout";
import AnimatedPage from "../animations/AnimatedPage";

const FavoritesPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel="Favorites" />
      <FavoritesLayout />
    </AnimatedPage>
  );
};

export default FavoritesPage;
