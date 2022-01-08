import classes from "../../cssModules/Nav.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchRounded from "@material-ui/icons/SearchRounded";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        width: "26ch",
        display: "flex",
        alignItems: "center",
        border: "1px solid #eddabd",
        height: "55%",
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.search}>
        <SearchRounded />
        <label htmlFor="search"/>
        <input id="search" placeholder="Search" />
      </div>
    </Box>
  );
}
