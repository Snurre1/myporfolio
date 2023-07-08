import { NavLink } from "react-router-dom";
import * as N from "./index.styled"

export default function Navbar() {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }


    return(
        <div>
        <nav>
        <N.List>
          <N.LiWrapper>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
            </N.LiWrapper>
            <N.LiWrapper>
            <NavLink style={navLinkStyles} to="/home/snurre/myportfolio/myporfolio/portfolio/src/components/projects/index.jsx">Projects</NavLink>
            </N.LiWrapper>
            <N.LiWrapper>
                <NavLink style={navLinkStyles} to="/home/snurre/myportfolio/myporfolio/portfolio/src/components/aboutme/index.jsx">About me</NavLink>
            </N.LiWrapper>
        </N.List>
      </nav>
      </div>
    )
  }
  
  
  