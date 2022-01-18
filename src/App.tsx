import "./App.css";
import { ThemeProvider } from "@mui/system";
import { theme } from "./themes/theme";
import Nav from "./comps/navbar/Nav";
import Container from "@mui/material/Container";
import TopCard from "./comps/main/TopCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>Order with Click&amp;Collect !&nbsp;</header>
        <nav>
          <Nav />
        </nav>
        <main>
          <Container sx={{width:'1200px', marginTop:'60px'}}>
            <TopCard />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
