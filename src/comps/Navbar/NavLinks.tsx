import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const NavLinks = () => {
  const [value, setValue] = React.useState(0);

  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: "inherit",
      width: "50%",
      backgroundColor: "#000",
    },
  });

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "fit-content",
        }}
      >
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs"
        >
          <StyledTab label="Order" />
          <StyledTab sx={{ fontStyle: "italic" }} label="Journal" />
          <StyledTab label="Maison LOUIS" />
        </StyledTabs>
      </Box>
    </>
  );
};
export default NavLinks;
