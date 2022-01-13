import "./App.css";
import { ThemeProvider } from "@mui/system";
import { theme } from "./themes/theme";
import Nav from "./comps/Navbar/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          Order with Click&amp;Collect !&nbsp;
        </header>
        <nav>
          <Nav />
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
