import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/Logo.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('ai/demo/free');
  };
  
  const handleHomeNavigation= () => {
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(isMenuOpen)
    if (element) {
      const offset = 80; // Adjust based on your header size (fixed navbar)
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth',
      });
    }
  };




  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/30 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <div className="flex items-center">
            <button onClick={() => {
              handleHomeNavigation();
              scrollToSection('hero')
            }
            } className="text-white font-bold text-xl flex items-center">
              <img src={Logo} className="h-8" />
            </button>
          </div>

          <div className="items-center gap-4 flex">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=" min-h-screen justify-center bg-black/80 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container text-center mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="hero" smooth={true} duration={200}
                className="text-white py-2 hover:text-secondary transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="features" smooth={true} duration={200}
                className="text-white py-2 hover:text-secondary transition-colors cursor-pointer"
              >
                Features
              </Link>
              <Link
                to="integration" smooth={true} duration={500}
                className="text-white py-2 hover:text-secondary transition-colors cursor-pointer"
              >
                Industries
              </Link>
              <button
                onClick={handleNavigation}
                className="text-white py-2 hover:text-secondary transition-colors cursor-pointer"
              >
                AI Demo
              </button>
              <Link
                to="contact" smooth={true} duration={500}
                className="bg-gradient text-white py-2 px-4 rounded-full text-center font-medium cursor-pointer"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;