import { FC } from "react";
import SubheadComponent from "../components/reusable/SubheadComponent";
import FooterComponent from "../components/reusable/FooterComponent";
import SearchLayout from "../components/search/SearchLayout";
import AnimatedPage from "../animations/AnimatedPage";

const SearchPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel="Search" isSearch />
      <SearchLayout />
      <FooterComponent />
    </AnimatedPage>
  );
};

export default SearchPage;
