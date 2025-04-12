// import Logo from "../../public/Logo.png"
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black border-t border-gray-800">
//       <div className="container mx-auto px-4 md:px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           <div>
//             <div className="flex items-center mb-4">
//               <Link to="/" className="text-white font-bold text-xl flex items-center">
//                 {/* <img src={Logo} className="h-10" /> */}
//               </Link>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Transforming businesses with AI-powered voice intelligence solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://www.instagram.com/omnisol.ai?igsh=MWZvYmJsNTcwMWlrdg=="
//                 className="text-gray-400 hover:text-white transition-colors"
//                 aria-label="Twitter"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M12 2.2c3.1 0 3.5 0 4.7.1 1.2.1 2.1.3 2.9.7 0 0 .1.1.2.2.8.4 1.4.9 2 1.5s1.1 1.2 1.5 2c.4.8.6 1.7.7 2.9 0 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.2-.3 2.1-.7 2.9-.4.8-.9 1.4-1.5 2s-1.2 1.1-2 1.5c-.1.1-.1.1-.2.2-1.1.4-1.7.6-2.9.7-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.2-.1-2.1-.3-2.9-.7-.1-.1-.1-.1-.2-.2-.8-.4-1.4-.9-2-1.5s-1.1-1.2-1.5-2c-.4-.8-.6-1.7-.7-2.9 0-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.2.3-2.1.7-2.9.4-.8.9-1.4 1.5-2s1.2-1.1 2-1.5c.1-.1.1-.1.2-.2 1.1-.4 1.7-.6 2.9-.7 1.2-.1 1.6-.1 4.7-.1zm0 5.8c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 9.3c-1.7 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm5.5-9.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path>
//                 </svg>

//               </a>
//               <a
//                 href="https://www.linkedin.com/company/omnisolai"
//                 className="text-gray-400 hover:text-white transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect width="4" height="12" x="2" y="9"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </a>
//               <a
//                 href="https://www.facebook.com/share/16A6SVR7Y5/"
//                 className="text-gray-400 hover:text-white transition-colors"
//                 aria-label="Facebook"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-white font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/industries" className="text-gray-400 hover:text-white transition-colors">
//                   Industries
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/demo" className="text-gray-400 hover:text-white transition-colors">
//                   AI Demo
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold mb-4">Solutions</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Voice Agents
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Appointment Scheduling
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Customer Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Healthcare Solutions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Enterprise Solutions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   Custom Integrations
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-bold mb-4">Newsletter</h3>
//             <p className="text-gray-400 mb-4">
//               Stay updated with the latest news and developments in AI voice technology.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="bg-gray-900 border border-gray-800 rounded-l-lg py-2 px-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 w-full"
//               />
//               <button
//                 type="submit"
//                 className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-lg transition-colors"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm mb-4 md:mb-0">
//             &copy; {currentYear} OmnisolAi. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Terms of Service
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
//               Cookie Policy
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNavigation = () => {
    navigate('ai/demo/free');
  };

  const handleHomeNavigation = () => {
    navigate('/');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <button 
                onClick={() => {
                  handleHomeNavigation();
                  scrollToSection('hero');
                }}
                className="text-white font-bold text-xl flex items-center"
              >
                <img src={Logo} className="h-10" alt="Company Logo" />
              </button>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses with AI-powered voice intelligence solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/omnisol.ai?igsh=MWZvYmJsNTcwMWlrdg=="
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.2c3.1 0 3.5 0 4.7.1 1.2.1 2.1.3 2.9.7 0 0 .1.1.2.2.8.4 1.4.9 2 1.5s1.1 1.2 1.5 2c.4.8.6 1.7.7 2.9 0 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.2-.3 2.1-.7 2.9-.4.8-.9 1.4-1.5 2s-1.2 1.1-2 1.5c-.1.1-.1.1-.2.2-1.1.4-1.7.6-2.9.7-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.2-.1-2.1-.3-2.9-.7-.1-.1-.1-.1-.2-.2-.8-.4-1.4-.9-2-1.5s-1.1-1.2-1.5-2c-.4-.8-.6-1.7-.7-2.9 0-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.2.3-2.1.7-2.9.4-.8.9-1.4 1.5-2s1.2-1.1 2-1.5c.1-.1.1-.1.2-.2 1.1-.4 1.7-.6 2.9-.7 1.2-.1 1.6-.1 4.7-.1zm0 5.8c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 9.3c-1.7 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2 3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2zm5.5-9.3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/omnisolai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/16A6SVR7Y5/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={200}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={200}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="integration"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                >
                  Industries
                </ScrollLink>
              </li>
              <li>
                <button
                  onClick={handleNavigation}
                  className="text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  AI Demo
                </button>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <RouterLink to="/solutions/voice-agents" className="text-gray-400 hover:text-white transition-colors">
                  Voice Agents
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/solutions/appointment-scheduling" className="text-gray-400 hover:text-white transition-colors">
                  Appointment Scheduling
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/solutions/customer-service" className="text-gray-400 hover:text-white transition-colors">
                  Customer Service
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/solutions/healthcare" className="text-gray-400 hover:text-white transition-colors">
                  Healthcare Solutions
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/solutions/enterprise" className="text-gray-400 hover:text-white transition-colors">
                  Enterprise Solutions
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/solutions/integrations" className="text-gray-400 hover:text-white transition-colors">
                  Custom Integrations
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and developments in AI voice technology.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-gray-900 border border-gray-800 rounded-l-lg py-2 px-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500/50 w-full"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OmnisolAi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <RouterLink to="/legal/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </RouterLink>
            <RouterLink to="/legal/omnisolai/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </RouterLink>
            <RouterLink to="/legal/use-of-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;