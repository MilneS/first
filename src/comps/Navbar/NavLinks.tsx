import * as React from "react";
import classes from "../../cssModules/Nav.module.css";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavLinks = () => {
  interface StyledTabProps {
    label: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    fontWeight: 400,
    fontSize: "16px",
    letterSpacing: "0px",
    marginRight: theme.spacing(1),
    color: "#000",
    height: "80px",
    fontFamily: "'EB Garamond', serif",
    "&.Mui-selected": {
      color: "#000",
    },
  }));

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
      <Box
        sx={{
          width: "fit-content",
        }}
      >
        <div className={classes.menus}>
          <div
            id="order"
            aria-controls={open1 ? "order-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? "true" : undefined}
            onClick={handleClick1}
          >
            <StyledTab label="Order" sx={{ opacity: 1 }} />
          </div>
          <Menu
            id="order-menu"
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "order",
            }}
          >
            <MenuItem onClick={handleClose}>Bakery</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <div>
            <StyledTab sx={{ fontStyle: "italic", opacity: 1 }} label="News" />
          </div>

          <div
            id="maison"
            aria-controls={open2 ? "maison-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? "true" : undefined}
            onClick={handleClick2}
          >
            <StyledTab label="Maison LOUIS" sx={{ opacity: 1 }} />
          </div>
          <Menu
            id="maison-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "maison",
            }}
          >
            <MenuItem onClick={handleClose}>Our story</MenuItem>
            <MenuItem onClick={handleClose}>Social Responsibility</MenuItem>
          </Menu>
        </div>
      </Box>
    </>
  );
};
export default NavLinks;
