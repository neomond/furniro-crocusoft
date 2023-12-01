import { Link, useNavigate } from "react-router-dom";
import userIcon from "../../assets/icons/userIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import cartIcon from "../../assets/icons/cartIcon.svg";

function MobileLinks({ closeMenu, isMenuOpen }: any) {
  const navigate = useNavigate();

  const navigateToCart = () => {
    closeMenu();
    navigate("/cart");
  };
  return (
    <div
      className={`${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-full bg-white z-50 w-64 transform space-y-9 transition-transform duration-300 justify-between overflow-hidden md:hidden flex flex-col pt-11 px-5 pb-5`}
    >
      <div className="flex flex-col space-y-9">
        <Link
          to="/"
          className="text-black text-lg border-b pb-2 border-[#F9F1E7] hover:text-[#B88E2F]"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-black text-lg border-b pb-2 border-[#F9F1E7] hover:text-[#B88E2F]"
          onClick={closeMenu}
        >
          Shop
        </Link>
        <Link
          to="/blog"
          className="text-black text-lg border-b pb-2 border-[#F9F1E7] hover:text-[#B88E2F]"
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-black text-lg border-b pb-2 border-[#F9F1E7] hover:text-[#B88E2F]"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
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
    </div>
  );
}

export default MobileLinks;
