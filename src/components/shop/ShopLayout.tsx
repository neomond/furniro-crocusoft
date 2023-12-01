import filterIcon from "../../assets/icons/filteringIcon.svg";
import viewList from "../../assets/icons/viewListIcon.svg";
import gridList from "../../assets/icons/gridIcon.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";

function ShopLayout() {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <section className="pt-12 pb-9 bg-[#F9F1E7]">
      <div className="max-w-[1290px] mx-auto flex justify-between flex-col lg:flex-row items-center ">
        <div className="flex items-center space-x-4">
          <div className="flex flex-row items-center">
            <img src={filterIcon} className="p-2 rounded-full pr-3" />
            <p className="text-base font-Poppins font-normal">Filter</p>
          </div>
          <img src={gridList} className="p-2 rounded-full" />
          <img src={viewList} className="p-2 rounded-full pr-7" />
          <p className="font-Poppins lg:text-base font-normal text-gray-600 border-l-2 border-[#9F9F9F] lg:pl-9 pl-4 text-xs">
            Showing 1–16 of {products.length} results
          </p>
        </div>

        <div className="flex items-center space-x-8">
          <div>
            <span className="pr-4 text-base font-Poppins font-normal">
              Show
            </span>
            {/* <select className="py-3 px-2 border text-[#9F9F9F] rounded-md bg-white text-base font-Poppins font-normal outline-none">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>

            </select> */}
            <input
              placeholder="16"
              className="py-2 px-0 border w-12 text-center text-[#9F9F9F] rounded-md bg-white text-base font-Poppins font-normal outline-none"
            />
          </div>
          <div>
            <span className="pr-4 text-base font-Poppins font-normal">
              Sort by
            </span>
            <select className="py-2 px-2 border pl-2 text-[#9F9F9F] rounded-md bg-white text-base font-Poppins font-normal outline-none">
              <option value="default ">Default</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopLayout;
