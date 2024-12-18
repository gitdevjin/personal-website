import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
