import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
 const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
     window.addEventListener('resize', handleResize);
     return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
   return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          </div>
          {windowWidth < 920 && (
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <FaBars />
              </button>
            </div>
          )}
        </div>
      </div>
      {(windowWidth < 920 && isOpen) && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
