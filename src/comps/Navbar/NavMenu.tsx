import * as React from "react";
import classes from '../../cssModules/Nav.module.css'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const handleClick1: any = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
    setAnchorEl2(null);
  };
  const handleClick2: any = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(null);
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  return (
    <>
      <div
        id="basic-button"
        aria-controls={open1 ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        onClick={handleClick1}
      >
        Order
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Bakery</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <div style={{fontStyle:'italic'}}>News</div>
      <div
        id="basic"
        aria-controls={open2 ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
      >
        Maison LOUIS
      </div>
      <Menu
        id="menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic",
        }}
      >
        <MenuItem onClick={handleClose}>Our story</MenuItem>
        <MenuItem onClick={handleClose}>Social Responsibility</MenuItem>
      </Menu>
      </>
  );
}
