import { isMobile } from "react-device-detect";
import Desktop from "./Desktop";

const Header = () => {
  return isMobile ? "" : <Desktop />;
};

export default Header;
