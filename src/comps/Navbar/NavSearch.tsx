import classes from "../../cssModules/Nav.module.css";
import Box from "@mui/material/Box";
import SearchRounded from "@material-ui/icons/SearchRounded";

const NavSearch = () => {
  return (
    <Box
      component="form"
      sx={{
        width: "26ch",
        display: "flex",
        alignItems: "center",
        border: "1px solid #eddabd",
        height: "45px",        
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.search}>
        <SearchRounded
          style={{
            stroke: "#fffcf8",
            strokeWidth: "1px",
            fontSize: "32px",
            color: "rgba(0, 0, 0, 0.800)",
          }}
        />
        <label htmlFor="search" />
        <input id="search" placeholder="Search" />
      </div>
    </Box>
  );
};
export default NavSearch;
