import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, Projects, Skills3d, About } from "../pages/index";

const Routes = () => {
  return (
    <>
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
