import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, Projects, Skills3d, About } from "../pages/index";
import Contacts from "../components/Contacts";

const Routes = () => {
  return (
    <>
    <div id="navbar"></div>
      <Contacts />
      <NavBar />
      <div id="/">
        <Home />
      </div>
      <div id="skills3d">
        <Skills3d />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </>
  )
}

export default Routes
