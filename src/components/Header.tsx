// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Bars from '../assets/bars.png';
import { motion as m } from 'framer-motion';
export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(() => {
    const main = document.querySelector('.main');
    main!.addEventListener('click', (e) => {
      handleClick(e);
    });
  }, [nav]);
  const handleClick = (e: MouseEvent) => {
    const navElement = navRef.current;
    if (nav === true && navElement) {
      const dialogDimensions = navElement.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        setNav(false);
      }
    }
  };
  const open = function () {
    setNav(!nav);
  };

  return windowWidth >= 640 ? (
    <nav className="container flex justify-between gap-4 text-xl pt-4">
      <NavLink
        to="/"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-blue-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-orange-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        About
      </NavLink>

      <NavLink
        to="/projects"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-teal-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Projects
      </NavLink>

      <NavLink
        to="/contact"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-red-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Contact
      </NavLink>
    </nav>
  ) : !nav ? (
    <nav className="container flex justify-between items-start gap-4 text-xl pt-4">
      <NavLink
        to="/"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-blue-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Home
      </NavLink>
      <button onClick={open}>
        <img className="h-12" src={Bars} alt="navbar" />
      </button>
    </nav>
  ) : (
    <nav className="container flex justify-between items-start gap-4 text-xl pt-4 relative">
      <NavLink
        to="/"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-blue-500 hover:-translate-y-1 hover:scale-110 transition-transform"
        onClick={open}
      >
        Home
      </NavLink>
      <m.div
        ref={navRef}
        animate={{ x: 0 }}
        initial={{ x: '200%' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 justify-start items-end absolute top-0 right-0 pr-2 pt-4 h-screen w-52 bg-gray-800 z-10"
      >
        <button onClick={open}>
          <img className="h-12" src={Bars} alt="navbar" />
        </button>
        <NavLink
          to="/about"
          className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-orange-500 hover:-translate-y-1 hover:scale-110 transition-transform"
          onClick={open}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-teal-500 hover:-translate-y-1 hover:scale-110 transition-transform"
          onClick={open}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-red-500 hover:-translate-y-1 hover:scale-110 transition-transform"
          onClick={open}
        >
          Contact
        </NavLink>
      </m.div>
    </nav>
  );
}
