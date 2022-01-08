import classes from "../../cssModules/Nav.module.css";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import PersonOutlined from "@material-ui/icons/PersonOutlined";
import ShoppingBagOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const NavIcons = () => {
  return (
    <div className={classes.NavIcons}>
      <LocationOnOutlined />
      <PersonOutlined />
      <ShoppingBagOutlinedIcon />
    </div>
  );
};
export default NavIcons;
