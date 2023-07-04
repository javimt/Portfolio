import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Home, About, Projects } from "../pages/index";

function Routes() {
  return (
    <>
      <NavBar/>
      <Home/>
      <Projects/>
      <About />
      <Footer />
    </>
  )
}

export default Routes
