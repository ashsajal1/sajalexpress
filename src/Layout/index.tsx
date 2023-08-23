import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/FooterComp";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <FooterComp />
    </>
  );
}
