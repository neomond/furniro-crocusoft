import { NavLink } from "react-router-dom";

function DesktopLinks() {
  return (
    <div className="hidden md:flex space-x-[75px] ml-[85px]">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#B88E2F] text-base" : "text-black"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#B88E2F] text-base" : "text-black"
        }
        to="/shop"
      >
        Shop
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#B88E2F] text-base" : "text-black"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#B88E2F] text-base" : "text-black"
        }
      >
        Contact
      </NavLink>
    </div>
  );
}

export default DesktopLinks;
