import "./App.css";
import classes from "./cssModules/topBar.module.css"
import { ThemeProvider } from "@mui/system";
import {theme} from "./themes/theme"
import Nav from "./comps/Nav";

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div>
      <div className={classes.topBar}>Order with Click&amp;Collect !&nbsp;</div>
      <Nav />
    </div>


    </ThemeProvider>
  );
}

export default App;
