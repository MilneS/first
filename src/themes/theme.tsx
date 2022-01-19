import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette:{
    secondary:{main:'#000'},
    primary:{main:'#F3E4CD'}
  },
  typography: {
    fontFamily: ['"EB Garamond", serif'].join(","),
    fontSize: 14,
  },
});
