import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import Navbar from "../Navbar/Navbar";
import NavbarMobile from "../Navbar/NavbarMobile";

//Toggle between different types of navbar depending of device
function responsiveNavbar(){
  if (typeof window !== "undefined") {
    if (window.screen.width < 900) {
      return <NavbarMobile />
    }
    else return <Navbar />
  }
}

const Layout = ({ children }) => (
    <>
      <header>
        {responsiveNavbar()}
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </>
)

export default Layout
