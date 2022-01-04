import "./App.css";
import Button from "@mui/material/Button";
import Arrow from "@material-ui/icons/ArrowForwardIos";
import Main from './comps/Main'
import {useState} from 'react'

function App() {
  const [showMain, setShowMain]= useState(false)

  const mainHandler=()=>{
    setShowMain(true)
  }
  return (
    <div className="app">
      {!showMain &&
      <Button
        endIcon={<Arrow />}
        variant="contained"
        color="success"
        size="large"
        style={{
          fontSize: 22,
          textTransform: "capitalize",
          backgroundColor: "darkcyan",
          margin: "250px",
        }}
        onClick={mainHandler}
      >
        Enter
      </Button>
      }
      {showMain && <Main/>}
    </div>
  );
}

export default App;
