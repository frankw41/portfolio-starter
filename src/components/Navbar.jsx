import React, { useState, useRef } from "react";
import logo_cat from "../assets/cat_logo.jpg";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import resume from "../assets/Frank Wan Resume.pdf";

const Navbar = () => {
  const [navActivate, setNavActivate] = useState(false);
  const toggleNav = () => setNavActivate(!navActivate);
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef(null);


  // Handle email button clicked, email copy to clipboard
  const handleCopyToClipboard = () => {
    const emailToCopy = 'frankwan41@gmail.com'; 
    navigator.clipboard.writeText(emailToCopy);
    setIsCopied(true);

    if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
    }

    // Reset the copied state after a short delay
    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleResumeClick = () => {
    const newWindow = window.open('', '_blank');
    newWindow.document.title = "Frank Wan Resume";

    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/x-icon';
    faviconLink.href = 'favicon.ico';
    newWindow.document.head.appendChild(faviconLink);

    newWindow.document.body.innerHTML = `<iframe src="${resume}" style="width: 100%; height: 100vh;" frameborder="0"></iframe>`;

  }

  return (
    <div
      className="fixed w-full h-[80px] flex
        justify-between items-center px-4 bg-[#0a192f]
        text-gray-300"
    >
      <div>
        <img src={logo_cat} alt="logo" style={{ width: "50px" }}></img>
      </div>
      {/* menu */}
      <ul className="hidden md:flex text-xl pr-6">
        <li className="hover:scale-125">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-125">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Drop down button */}
      <div className="md:hidden z-10" onClick={toggleNav}>
        {navActivate ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          navActivate
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] items-center flex flex-col justify-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={toggleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={toggleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/frank-yicong-wan-89a132268/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              rel="noopener noreferrer"
              href="https://leetcode.com/Inpending/"
              target="_blank"
            >
              Leetcode <SiLeetcode size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]">
            <button
              className="flex justify-between items-center w-full text-gray-300"
              onClick={handleCopyToClipboard}
            >
              Email <HiOutlineMail size={30} />
            </button>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]">
            <button
                onClick={handleResumeClick}
                className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>
      {isCopied && <div className="bg-green-500 text-white p-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-1000">
        Email Copied!
        </div>}
    </div>
  );
};

export default Navbar;
