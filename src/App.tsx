import "./App.css";
import Button from "@mui/material/Button";
import Arrow from "@material-ui/icons/ArrowForwardIos";
import Main from "./comps/Main";
import { useState } from "react";
// import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@mui/system";

function App() {
  const [showMain, setShowMain] = useState(false);

  const theme: any = createTheme({
    palette: {
      primary: {
        main: "#c72057",
      },
    },
  });

  const mainHandler = () => {
    setShowMain(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {!showMain && (
          <div className="home">
            <div className="titleCont">
              <h1 className="title">Visit the Bakery</h1>
            </div>
            <Button
              color="primary"
              endIcon={<Arrow />}
              variant="contained"
              size="large"
              style={{
                fontSize: "20px",
                textTransform: "capitalize",
                marginTop: "160px",
                marginLeft: "550px",
              }}
              onClick={mainHandler}
            >
              Enter
            </Button>
          </div>
        )}

        {showMain && <Main />}
      </div>
    </ThemeProvider>
  );
}

export default App;
