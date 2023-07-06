import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, Projects, Skills, About } from "../pages/index";


const Routes = () => {
  return (
    <>
      <NavBar />
      <Skills />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

export default Routes
