import * as React from "react";
// import classes from "../../cssModules/Nav.module.css";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavLinks = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [showOrder, setShowOrder] = React.useState<boolean>(false)
  const [showMaison, setShowMaison] = React.useState<boolean>(false)


  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Tab
          disableRipple
          value="one"
          label="Order"
          id='Order'
          sx={{
            textTransform: "capitalize",
            color: "#000",
            ":hover": {
              ".menus": { display: "block" },
            },
          }}
          onMouseEnter={() => setShowOrder(true)}
          onMouseLeave={() => setShowOrder(false)}
        />
       { showOrder &&<div>hi</div>}

        <Tab
          disableRipple
          value="two"
          label="News"
          sx={{
            textTransform: "capitalize",
            fontStyle: "italic",
            color: "#000",
          }}
        />
        <Tab
          disableRipple
          value="three"
          label="Maison LOUIS"
          sx={{ textTransform: "capitalize", color: "#000" }}
          onMouseEnter={() => setShowMaison(true)}
          onMouseLeave={() => setShowMaison(false)}

        />
        { showMaison && <div>Maison</div> }
      </Tabs>
    </>
  );
};
export default NavLinks;
