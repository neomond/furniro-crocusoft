import { FC, useEffect, useState } from "react";
// import { items } from "../home/OurProducts";
// import Pagination from "../reusable/PaginationComponent";
import ProductList from "../reusable/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/app/store";
import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productsSlice";
import Pagination from "../reusable/PaginationComponent";

const ShopProducts: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(selectProducts);
  const [page, setPage] = useState<number>(1);
  const pageSize = 16;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedItems = products.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="pt-16 pb-18 mb-20 max-w-[1290px] mx-auto space-y-11 px-3">
      <ProductList items={displayedItems} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={Math.ceil(products.length / pageSize)}
      />
    </section>
  );
};

export default ShopProducts;
