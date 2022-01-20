import * as React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const NavLinks = () => {
  const [anchorElOrder, setAnchorElOrder] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElMaison, setAnchorElMaison] =
    React.useState<null | HTMLElement>(null);

  const openOrderMenu = Boolean(anchorElOrder);
  const openMaisonMenu = Boolean(anchorElMaison);

  const handleClickOrder = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElOrder(event.currentTarget);
  };
  const handleClickMaison = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMaison(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElOrder(null);
    setAnchorElMaison(null);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <Button
          id="order-button"
          aria-controls={openOrderMenu ? "order-menu" : undefined}
          onMouseEnter={(e) => handleClickOrder(e)}
          // onMouseLeave={() => }
          color="secondary"
          sx={{
            fontSize: "17px",
            letterSpacing: "-0.5px",
            textTransform: "capitalize",
            height: "75px",
            ":hover": { borderRadius: "0px", borderBottom: "2px solid black" },
          }}
        >
          Order
        </Button>
        <Menu
          anchorEl={anchorElOrder}
          open={openOrderMenu}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Bakery</MenuItem>
          <MenuItem onClick={handleClose}>Catering</MenuItem>
          <MenuItem onClick={handleClose}>Specialties</MenuItem>
        </Menu>
        <Button
          // onClick={}
          color="secondary"
          sx={{
            letterSpacing: "-0.6px",
            fontSize: "17px",
            textTransform: "capitalize",
            fontStyle: "italic",
            height: "75px",
            ":hover": { borderRadius: "0px", borderBottom: "2px solid black" },
          }}
        >
          News
        </Button>
        <Button
          aria-controls={openMaisonMenu ? "maison-menu" : undefined}
          onMouseEnter={(e) => handleClickMaison(e)}
          // onMouseLeave={() => }
          color="secondary"
          sx={{
            letterSpacing: "-0.5px",
            fontSize: "17px",
            textTransform: "capitalize",
            height: "75px",
            ":hover": { borderRadius: "0px", borderBottom: "2px solid black" },
          }}
        >
          Maison LOUIS
        </Button>
        <Menu
          id="maison-menu"
          anchorEl={anchorElMaison}
          open={openMaisonMenu}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Our story</MenuItem>
          <MenuItem onClick={handleClose}>Social responsibility</MenuItem>
        </Menu>
      </div>
    </>
  );
};
export default NavLinks;
