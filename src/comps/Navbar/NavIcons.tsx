import classes from "../../cssModules/Nav.module.css";
import {
  LocationOnOutlined,
  PersonOutlined,
  LocalMallOutlined,
} from "@material-ui/icons";

const NavIcons = () => {
  return (
    <div className={classes.NavIcons}>
      <LocationOnOutlined />
      <PersonOutlined />
      <LocalMallOutlined />
    </div>
  );
};
export default NavIcons;
