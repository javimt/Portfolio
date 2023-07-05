import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, Projects, Skils, About } from "../pages/index";


const Routes = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Projects />
      <Skils />
      <About />
      <Footer />
    </>
  )
}

export default Routes
