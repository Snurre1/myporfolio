import * as M from "./index.styled"
import CSM from "/home/snurre/myportfolio/myporfolio/src/csmscr.png"
import Gamehub from "/home/snurre/myportfolio/myporfolio/src/gamehubscr.png"
import FoodCorner from "/home/snurre/myportfolio/myporfolio/src/foodcornerscr.png"
import Lux from "/home/snurre/myportfolio/myporfolio/src/luuuux.png"
import YourBnb from "/home/snurre/myportfolio/myporfolio/src/Your.png"
import YourStore from "/home/snurre/myportfolio/myporfolio/src/yourstore.png"
function Projects() {
    return (
      <>
        <M.One>My projects</M.One>
        <M.Container>
            <M.CardContainer>
                <h2>Gamehub</h2>
                <M.ImageContainer><M.Image src={Gamehub} alt="Gamehub site"></M.Image></M.ImageContainer>
                <M.TextContainer>My first proper attemt at a site, this was my first project at Noroff. This was only made with HTML and CSS, later I attemted some JS from our first session with it.
                </M.TextContainer>
                <M.UlDecor>
                <li><a href="https://snurre1.netlify.app">Link to Site</a></li>
                <li><a href="https://github.com/Noroff-FEU-Assignments/cross-course-project-Snurre1">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
            <M.CardContainer>
                <h2>Community Science Museum</h2>
                <M.ImageContainer><M.Image src={CSM} alt="Community Science Museum site"></M.Image></M.ImageContainer>
                <M.TextContainer>My semester project at Noroff, made with HTML and CSS. First time trying media queries</M.TextContainer>
                <M.UlDecor>
                <li><a href="https://sleepy-einstein-abf439.netlify.app">Link to Site</a></li>
                <li><a href="https://github.com/Snurre1/Semesterproject">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
            <M.CardContainer>
                <h2>Foodcorner</h2>
                <M.ImageContainer><M.Image src={FoodCorner} alt="Foodcorner site"></M.Image></M.ImageContainer>
                <M.TextContainer>Project exam for my first year at Noroff, made with HTML, CSS and JS.</M.TextContainer>
                <M.UlDecor>
                <li><a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-Snurre1">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
            <M.CardContainer>
                <h2>Lux</h2>
                <M.ImageContainer><M.Image src={Lux} alt="Kux site"></M.Image></M.ImageContainer>
                <M.TextContainer>This is my semester exam for my second year at Noroff. Made with HTML, CSS, JS, Bootstrap and Sass</M.TextContainer>
                <M.UlDecor>
                <li><a href="https://tubular-selkie-6ac3da.netlify.app">Link to Site</a></li>
                <li><a href="https://github.com/Snurre1/semester-project-2">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
            <M.CardContainer>
                <h2>YourStore</h2>
                <M.ImageContainer><M.Image src={YourStore} alt="YourStore site"></M.Image></M.ImageContainer>
                <M.TextContainer>My first React app! Created with HTML, JS, React and Styled Components.</M.TextContainer>
                <M.UlDecor>
                <li><a href="https://transcendent-unicorn-004ef6.netlify.app">Link to Site</a></li>
                <li><a href="https://github.com/Snurre1/my-first-app">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
            <M.CardContainer>
                <h2>YourBNB</h2>
                <M.ImageContainer><M.Image src={YourBnb} alt="YourBNB site"></M.Image></M.ImageContainer>
                <M.TextContainer>This was my final exam at Noroff, a booking site. This was made with HTML, JS, React and Styled Components.</M.TextContainer>
                <M.UlDecor>
                <li><a href="https://jade-florentine-9e175f.netlify.app/">Link to Site</a></li>
                <li><a href="https://github.com/Snurre1/Final-exam">Link to Repo</a></li>
                </M.UlDecor>
            </M.CardContainer>
        </M.Container>
      </>
    );
  }
  
  export default Projects;
  