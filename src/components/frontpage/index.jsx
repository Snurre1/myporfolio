import * as Ho from "./index.styled"
import Thomas from "/home/snurre/myportfolio/myporfolio/src/Thomas.jpg"
function Home() {
    return (
      <Ho.Wrapper>
        <h1>Portfolio</h1>
        <p>Hello and welcome!</p>
        <Ho.ImageContainer><Ho.Image src={Thomas} alt="of Thomas Henriksen"></Ho.Image></Ho.ImageContainer>
        <p>Yes, that`s me inside a tunnel</p>
       </Ho.Wrapper>
    );
  }
  
  export default Home;
  