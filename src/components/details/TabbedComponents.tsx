import { FC, useEffect, useState } from "react";
import sofaLarge from "../../assets/images/sofaLarge.svg";
import sofaLarge2 from "../../assets/images/sofaLarge2.svg";
import { ProductTypes } from "../../types/ProductsTypes";

type ProductTabsProps = {
  product: ProductTypes;
};

const ProductTabs: FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="border-b pb-16">
      <div className="max-w-[1290px] mx-auto pt-14 bg-white p-6">
        {/* Tab navigation */}
        <div>
          <nav
            className="tab-navigation"
            style={{
              display: "flex",
              flexDirection: windowWidth < 768 ? "row" : "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Tabs"
          >
            <button
              className={`text-[#9F9F9F] whitespace-nowrap py-4 mx-2 lg:mx-6 border-b-2 font-Poppins font-normal text-xs lg:text-2xl ${
                activeTab === "description"
                  ? "border-[#B88E2F] text-[#000]"
                  : "border-transparent"
              }`}
              aria-current={activeTab === "description" ? "page" : undefined}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`text-[#9F9F9F]  whitespace-nowrap py-4 mx-2 lg:mx-6 border-b-2 font-Poppins font-normal text-xs lg:text-2xl ${
                activeTab === "additional"
                  ? "border-[#B88E2F] text-[#000]"
                  : "border-transparent"
              }`}
              aria-current={activeTab === "additional" ? "page" : undefined}
              onClick={() => setActiveTab("additional")}
            >
              Additional Information
            </button>
            <button
              className={`text-[#9F9F9F]  whitespace-nowrap py-4 mx-2 lg:mx-6 border-b-2 font-Poppins font-normal text-xs lg:text-2xl ${
                activeTab === "reviews"
                  ? "border-[#B88E2F] text-[#000]"
                  : "border-transparent"
              }`}
              aria-current={activeTab === "reviews" ? "page" : undefined}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews [5]
            </button>
          </nav>
        </div>
        {/* Tab content */}
        <div className="flex flex-col lg:flex-row space-x-8 justify-center items-center pt-9">
          {activeTab === "description" && (
            <div>
              <p className="text-[#9F9F9F] text-base font-Poppins font-normal px-6">
                {product.description}
              </p>
              <p className="text-[#9F9F9F] text-base mt-4 font-Poppins font-normal px-6">
                {product.description}
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-center mx-auto space-x-8 pt-9">
                <img
                  className="product-tab-image"
                  src={sofaLarge}
                  alt="Sofa Large"
                  style={{
                    maxWidth: windowWidth < 768 ? "90%" : "450px",
                  }}
                />
                <img
                  className="product-tab-image"
                  src={sofaLarge2}
                  alt="Sofa Large 2"
                  style={{
                    maxWidth: windowWidth < 768 ? "90%" : "450px",
                  }}
                />
              </div>
            </div>
          )}
          {activeTab === "additional" && (
            <div>
              <p>Text 2</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <p>Text 3</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
