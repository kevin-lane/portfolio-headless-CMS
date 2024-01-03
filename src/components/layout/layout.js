import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )


export default Layout
