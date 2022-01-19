import classes from "../../cssModules/Nav.module.css";
import NavSearch from "./NavSearch";
import NavLinks from "./NavLink";
import NavIcons from "./NavIcons";

const Nav = () => {
  return (
    <>
      <NavLinks />
      <div className={classes.middleCont}>
        <div>
          <p className={classes.louis}>LOUIS</p>
          <p className={classes.since}>Since 1889</p>
        </div>
      </div>
      <div className={classes.searchCont}>
        <NavSearch />
      </div>
      <div><NavIcons/></div>
    </>
  );
};
export default Nav;
