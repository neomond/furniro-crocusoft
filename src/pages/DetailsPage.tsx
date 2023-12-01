import { FC, useEffect } from "react";
import SwiperComponent from "../components/details/SwiperComponent";
import TabForDetails from "../components/reusable/TabForDetails";
import ProductTabs from "../components/details/TabbedComponents";
import RelatedProducts from "../components/details/RelatedProducts";
import AnimatedPage from "../animations/AnimatedPage";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/app/store";
import { fetchProducts } from "../redux/features/products/productsSlice";

const DetailsPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, id]);

  const selectedProduct = products.find((product) => product.id === id);
  return (
    <AnimatedPage>
      {selectedProduct && <TabForDetails product={selectedProduct} />}
      {selectedProduct && <SwiperComponent product={selectedProduct} />}
      {selectedProduct && <ProductTabs product={selectedProduct} />}
      <RelatedProducts />
    </AnimatedPage>
  );
};

export default DetailsPage;
