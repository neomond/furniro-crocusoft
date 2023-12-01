import { FC, useEffect, useState } from "react";
// import { items } from "../home/OurProducts";
import ProductList from "../reusable/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/app/store";
import { fetchProducts } from "../../redux/features/products/productsSlice";

const RelatedProducts: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const relatedItems = products.filter((item) => item.isRelated);
  const [displayedItemsCount, setDisplayedItemsCount] = useState<number>(4);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleShowMore = () => {
    setDisplayedItemsCount(relatedItems.length);
  };
  const handleShowLess = () => {
    setDisplayedItemsCount(4);
  };

  const displayedItems = relatedItems.slice(0, displayedItemsCount);
  const allItemsDisplayed = displayedItemsCount >= relatedItems.length;

  return (
    <section className="border-b">
      <div className="max-w-[1290px] mx-auto pt-[40px] pb-[100px] py-[48px] px-4 lg:px-0 items-center ">
        <h2 className="text-[36px] pb-[32px] pt-6 flex justify-center font-normal">
          Related Products
        </h2>
        <ProductList items={displayedItems} />
        <div className="flex justify-center pt-[44px] items-center">
          {!allItemsDisplayed && (
            <button
              onClick={handleShowMore}
              className="border border-[#B88E2F] hover:bg-yellow-600 hover:text-[#fff] transition-all duration-300  py-[12px] px-[74px] text-[#B88E2F] font-Poppins text-sm"
            >
              Show More
            </button>
          )}

          {displayedItemsCount > 4 && (
            <button
              onClick={handleShowLess}
              className="border border-[#B88E2F] py-[12px] px-[74px] text-[#B88E2F] font-Poppins text-sm mx-2"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
