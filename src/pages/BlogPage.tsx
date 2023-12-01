import { FC } from "react";
import SubheadComponent from "../components/reusable/SubheadComponent";
import FeaturesBarComponent from "../components/reusable/FeaturesBarComponent";
import BlogLayout from "../components/blog/BlogLayout";
import AnimatedPage from "../animations/AnimatedPage";

const BlogPage: FC = () => {
  return (
    <AnimatedPage>
      <SubheadComponent mainLabel={"Blog"} />
      <BlogLayout />
      <FeaturesBarComponent />
    </AnimatedPage>
  );
};

export default BlogPage;
