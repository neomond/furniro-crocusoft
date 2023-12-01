import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { ProductTypes } from "../../types/ProductsTypes";

const SearchLayout: FC = () => {
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults
  );

  return (
    <section className="max-w-[1290px] mx-auto py-16">
      <p className="font-Poppins"> Search Results will appear here...</p>
      {searchResults.length > 0 ? (
        searchResults.map((product: ProductTypes) => (
          <div key={product.id}>{product.title}</div>
        ))
      ) : (
        <p className="font-Poppins">No results found.</p>
      )}
    </section>
  );
};

export default SearchLayout;
