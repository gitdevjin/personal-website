import Layout from "./components/Layout";
import HomePage from "./components/Body/Home/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log("App rendered");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<About />} />
          <Route path="products" element={<Shop />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
