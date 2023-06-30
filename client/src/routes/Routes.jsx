import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Home, About, Projects } from "../pages/index";

function Routes() {
  return (
    <>
      <NavBar />
      <Footer />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default Routes;