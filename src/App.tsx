import "./App.css";
import Button from "@mui/material/Button";
import Arrow from "@material-ui/icons/ArrowForwardIos";
import Main from "./comps/Main";
import { useState } from "react";

function App() {
  const [showMain, setShowMain] = useState(false);

  const mainHandler = () => {
    setShowMain(true);
  };
  return (
    <div className="app">
      {!showMain && (
        <div className="home">
          <div className="titleCont">
            <h1 className="title">Visit the Bakery</h1>
          </div>
          <Button
            endIcon={<Arrow />}
            variant="contained"
            size="large"
            style={{
              fontSize: "20px",
              textTransform: "capitalize",
              backgroundColor: "#c72057",
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
  );
}

export default App;
