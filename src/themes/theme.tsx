import { createTheme } from "@material-ui/core";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
export const theme = createTheme({
    palette: {
      primary: {
        main: "#fff9e7",
      },
    },
  });



  