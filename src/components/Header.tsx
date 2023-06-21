import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion as m } from 'framer-motion';
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
    main!.addEventListener('click', (e: any) => handleClick(e));
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
        document.body.classList.remove('stopScroll');
      }
    }
  };
  const open = function () {
    if (nav) document.body.classList.remove('stopScroll');
    else document.body.classList.add('stopScroll');
    setNav(!nav);
  };

  return (
    <nav className="container flex justify-between gap-4 text-xl pt-4">
      <NavLink
        to="/"
        className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-blue-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Home
      </NavLink>

      {windowWidth >= 640 ? (
        <>
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
        </>
      ) : (
        <div
          onClick={() => {
            open();
            document.body.classList.add('stopScroll');
          }}
          className="space-y-1.5 cursor-pointer pt-3 z-50"
        >
          <m.span
            animate={{ rotateZ: nav ? 45 : 0, y: nav ? 8 : 0 }}
            className="block h-0.5 w-8 bg-white"
          ></m.span>
          <m.span
            animate={{ width: nav ? 0 : 24 }}
            className="block h-0.5 w-6 bg-white"
          ></m.span>
          <m.span
            animate={{
              rotateZ: nav ? -45 : 0,
              y: nav ? -8 : 0,
              width: nav ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-white"
          ></m.span>
        </div>
      )}
      <AnimatePresence>
        {nav && (
          <div className=" main fixed left-0 right-0 top-0 bottom-0 z-10 flex justify-end bg-black bg-opacity-50">
            <m.div
              ref={navRef}
              animate={{ x: 0 }}
              initial={{ x: '100%' }}
              exit={{ x: '100%' }}
              className="flex flex-col gap-4 justify-start items-end mt-16 h-screen w-52 bg-gray-800 z-10"
            >
              <NavLink
                to="/about"
                className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-orange-500 hover:-translate-y-1 hover:scale-110 transition-transform"
                onClick={() => {
                  open();
                  document.body.classList.remove('stopScroll');
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-teal-500 hover:-translate-y-1 hover:scale-110 transition-transform"
                onClick={() => {
                  open();
                  document.body.classList.remove('stopScroll');
                }}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="px-7 py-2 border-b-4 border-b-transparent hover:border-b-red-500 hover:-translate-y-1 hover:scale-110 transition-transform"
                onClick={() => {
                  open();
                  document.body.classList.remove('stopScroll');
                }}
              >
                Contact
              </NavLink>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
