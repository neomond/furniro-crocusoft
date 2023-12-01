import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";
import MobileLinks from "../navbar/MobileLinks";
import DesktopLinks from "../navbar/DesktopLinks";
import HamburgerButton from "../navbar/HamburgerButton";
import NavigationIcons from "../navbar/NavigationIcons";
import CartModal from "../navbar/CartModal";
import LogoComponent from "../navbar/LogoComponent";

const HeaderComponent: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const navigate = useNavigate();
  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateToShop = () => {
    toggleCart();
    navigate("/shop");
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen || isCartOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [isMenuOpen, isCartOpen]);

  return (
    <header className="bg-white py-4 lg:py-8">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-1">
        <LogoComponent />
        <HamburgerButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <MobileLinks closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
        )}

        <DesktopLinks />
        <NavigationIcons
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          totalItemsInCart={totalItemsInCart}
          favorites={favorites}
        />
      </nav>
      <CartModal
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        navigateToShop={navigateToShop}
      />
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleCart}
        ></div>
      )}
    </header>
  );
};

export default HeaderComponent;
