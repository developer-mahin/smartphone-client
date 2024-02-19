import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex justify-center items-center">
      <img src={logo} alt="" />
      <p className={`text-[#514D53] font-extrabold font-family-lato`}>
        Smartphone <br /> <span className="text-[#10B981]">Management</span>
      </p>
    </Link>
  );
};

export default Logo;
