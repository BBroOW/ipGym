import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
