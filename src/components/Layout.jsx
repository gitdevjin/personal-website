import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layout" className="relative ">
      <Header />

      <Outlet />

      {/* <Footer /> */}
    </div>
  );
}
