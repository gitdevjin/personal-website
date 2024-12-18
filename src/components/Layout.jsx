import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  console.log("Layout rendered");
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
