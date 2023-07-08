import { Routes, Route } from "react-router-dom";
import Home from "./components/frontpage";
import Projects from "./components/projects";
import AboutMe from "./components/aboutme";
import Layout from "./components/layout";
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="/home/snurre/myportfolio/myporfolio/portfolio/src/components/projects/index.jsx" element={<Projects/>}/>
      <Route path="/home/snurre/myportfolio/myporfolio/portfolio/src/components/aboutme/index.jsx" element={<AboutMe/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
