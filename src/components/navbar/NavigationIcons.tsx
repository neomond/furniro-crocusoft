import { Link } from "react-router-dom";
import userIcon from "../../assets/icons/userIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import cartIcon from "../../assets/icons/cartIcon.svg";

const NavigationIcons = ({ toggleCart, totalItemsInCart, favorites }: any) => {
  return (
    <div className="hidden md:flex items-center space-x-4 lg:space-x-11 relative">
      <Link to="/auth">
        <img src={userIcon} alt="User" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/search">
        <img src={searchIcon} alt="Search" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/favorites">
        <img
          src={favoritesIcon}
          alt="Favorites"
          className="h-6 cursor-pointer"
        />
        {favorites.length > 0 && (
          <div className="cart-item-count absolute top-[-12px] right-[58px] text-sm rounded-3xl font-Poppins text-[#fff] bg-[#B88E2F] px-[6px]">
            {favorites.length >= 9 ? (
              <span>9+</span>
            ) : (
              <span> {favorites.length}</span>
            )}
          </div>
        )}
      </Link>
      <button onClick={toggleCart}>
        <img src={cartIcon} alt="Cart" className="h-6 cursor-pointer" />
        {totalItemsInCart > 0 && (
          <div>
            <span className="cart-item-count absolute top-[-12px] right-[-10px] text-sm rounded-3xl font-Poppins text-[#fff] bg-[#B88E2F] px-[6px]">
              {totalItemsInCart}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default NavigationIcons;
