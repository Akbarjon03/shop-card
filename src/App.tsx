import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Store from "./pages/Store";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
