import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/userIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import cartIcon from "../../assets/icons/cartIcon.svg";

function MobileIcons({ closeMenu }: any) {
  const navigate = useNavigate();

  const navigateToCart = () => {
    closeMenu();
    navigate("/cart");
  };
  return (
    <div className="flex flex-row py-2 space-x-9 rounded-xl px-2 bg-[#F9F1E7]">
      <Link to="/auth" onClick={closeMenu}>
        <img src={userIcon} alt="User" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/search" onClick={closeMenu}>
        <img src={searchIcon} alt="Search" className="h-6 cursor-pointer" />
      </Link>
      <Link to="/favorites" onClick={closeMenu}>
        <img
          src={favoritesIcon}
          alt="Favorites"
          className="h-6 cursor-pointer"
        />
      </Link>
      <button onClick={navigateToCart}>
        <img src={cartIcon} alt="Cart" className="h-6 cursor-pointer" />
      </button>
    </div>
  );
}

export default MobileIcons;
