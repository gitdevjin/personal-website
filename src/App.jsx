import Layout from "./components/Layout";
import HomePage from "./components/Body/Home/HomePage";
import BlogPage from "./components/Body/Blog/BlogPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log("App rendered");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          {/*<Route path="products" element={<Shop />} /> this is example*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
