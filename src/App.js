import "./App.css"
import image from "./images/profile/MeThumbnail2.jpg";
import linkedin from "./images/buttons/linkedin.svg";
import email from "./images/buttons/email.svg";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app" >
      <div className="cardWrapper">
       
       <img src={image} alt="" />
       <div className="contact-section">
         <div className="cardBody">
          <h1>Nedim Perva</h1>
          <h4>React Developer</h4>
           <div className="buttons">
            <a href="mailto:nedim.perva@gmail.com"> <img src={email} alt="Emil Button" /> </a>
             <a href="https://www.linkedin.com/in/nedimperva/" target="_blank" ><img src={linkedin} alt="LinkedIn Button" className="img_style" /></a>
           </div>
           <About /> 
        </div>
       </div>
       <Footer />
      </div>
    </div>
  );
}

export default App;
