import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import * as B from "./index.styled"
function Layout() {
    return (
      <B.body>
       <Header />
      <Outlet />
      <Footer />
      </B.body>
    );
  }
  
  export default Layout;
  