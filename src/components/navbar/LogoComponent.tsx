import logoHeader from "../../assets/icons/logoHeader.svg";
import { Link } from "react-router-dom";

function LogoComponent() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={logoHeader} alt="Furniro Logo" className="h-8" />
      <span className="text-xl lg:text-2xl font-bold">Furniro</span>
    </Link>
  );
}

export default LogoComponent;
