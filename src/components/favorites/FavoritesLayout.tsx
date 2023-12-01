import { FC } from "react";
// import { Link } from "react-router-dom";
// import shareIcon from "../../assets/icons/share.svg";
// import compareIcon from "../../assets/icons/compare.svg";
// import favoritesIcon from "../../assets/icons/heart.svg";
// import prodImage1 from "../../assets/images/prodImage 1.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import ProductCard from "../reusable/ProductCard";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AnimatedDiv from "../../animations/AnimatedDiv";

const FavoritesLayout: FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <section className="max-w-[1290px] mx-auto py-16 flex flex-wrap ">
      {favorites.length > 0 ? (
        <div className="grid grid-cols-4 w-full gap-6">
          {favorites.map((item) => (
            <AnimatedDiv>
              <ProductCard key={item.id} item={item} />
            </AnimatedDiv>
          ))}
        </div>
      ) : (
        <div className="w-full text-center">
          <p className="text-lg font-Poppins font-medium py-4">
            Your favorites list is empty.
          </p>
          <MdFavoriteBorder className="large-cart-icon" />
          <button
            onClick={navigateToShop}
            className="flex mx-auto mt-6 transition: all ease-in-out 0.3s; font-Poppins text-sm font-medium bg-[#B88E2F] hover:bg-yellow-500 text-[#fff] px-3 py-4 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </section>
  );
};

export default FavoritesLayout;
