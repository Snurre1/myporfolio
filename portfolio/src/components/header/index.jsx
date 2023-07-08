import NavBar from "../nav/index";
import * as H from "./index.styled"


function Header() {
    return (
      <div>
       <H.Logo>Thomas Henriksen</H.Logo>
       <NavBar/>
      </div>
    );
  }
  
  export default Header;
  