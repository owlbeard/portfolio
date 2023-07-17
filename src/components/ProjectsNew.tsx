import { useState } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';

const projects = Object.values(
  import.meta.glob('../assets/projects/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

const variants = {
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
  },
};

export default function ProjectsNew() {
  const [page, setPage] = useState(1);
  const pageUp = (page: number) => {
    if (page < 8) setPage((prevPage) => prevPage + 1);
    if (page === 8) setPage(1);
  };
  const pageDown = (page: number) => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
    if (page === 1) setPage(8);
  };
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="flex flex-col py-4 relative"
      >
        <div className="flex items-center relative overflow-hidden">
          <AnimatePresence>
            {page === 1 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://eksiclone.vercel.app/">ekşisözlük clone</a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://eksiclone.vercel.app/"
                  >
                    <img src={projects[0]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  A fully responsive ekşisözlük clone which has all the
                  front-end features of the original website. I have used my own
                  placeholder database since ekşisözlük doesn't have an API.
                  Made with Next.js, TypeScript and TailwindCSS.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/eksi-clone-next">
                      Code
                    </a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://eksiclone.vercel.app/">Live Demo</a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 2 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/todo-list-react">
                    Todo App
                  </a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/todo-list-react"
                  >
                    <img src={projects[1]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  Simple todo list app where you can create edit and delete
                  tasks, create, edit or delete projects add tasks to the
                  projects etc. Created with React.js - in TypeScript - and
                  Tailwind CSS.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/todo-list-react">
                      Code
                    </a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/todo-list-react">
                      Live Demo
                    </a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 3 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://yodesco.vercel.app/">Corporate Website</a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://yodesco.vercel.app/"
                  >
                    <img src={projects[2]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  In this project I have made a corporate website for one of my
                  close relative's company. This is a mock-up version of it with
                  placeholder texts and links. This is also my first Next.js
                  project that I have deployed on Vercel. Created with Next.js,
                  React.js, TypeScript, TailwindCSS.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/yodesco">Code</a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://yodesco.vercel.app/">Live Demo</a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 4 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/rest-api/">Timer App</a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/rest-api/"
                  >
                    <img src={projects[3]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  Timer app where you can pick the amount of rest time you need
                  and start the timer to work for 30 minutes. Background changes
                  according to whether you are resting or working and an alert
                  sound is played when the time is up! Works on background too,
                  thanks to web workers. Created with TypeScript, ReactJS and
                  TailwindCSS, bundled with Vite.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/rest-api">Code</a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/rest-api/">Live Demo</a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 5 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/shopping-cart/">
                    Shopping Cart
                  </a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/shopping-cart/"
                  >
                    <img src={projects[4]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  A shopping cart app where you can add any amount of items to
                  your cart, you can also remove items or add more items in the
                  checkout page. Created with HTML, Tailwind CSS, JS, ReactJS.
                  Bundled with Vite.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/shopping-cart">Code</a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/shopping-cart/">
                      Live Demo
                    </a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 6 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/memory-card">
                    Memory Cards
                  </a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/memory-card"
                  >
                    <img src={projects[5]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  A Bleach Memory Card game where you can try to memorize which
                  card you haven't clicked yet. In order to score high you must
                  click each card exactly once!
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/memory-card">Code</a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/memory-card">
                      Live Demo
                    </a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 7 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/weather-app-react/">
                    Weather App
                  </a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/weather-app-react/"
                  >
                    <img src={projects[6]} alt="weather app" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  Weather app that fetches data from WeatherAPI asynchronously
                  to get weather data of any city the user searched in the
                  search bar. Depending on the state of the weather of selected
                  city, background will change accordingly! Created with HTML,
                  plain CSS & Tailwind CSS and ReactJS. JavaScript code is
                  written in TypeScript and bundled with Vite.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/weather-app-react">
                      Code
                    </a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/weather-app-react/">
                      Live Demo
                    </a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {page === 8 && (
              <m.div
                initial={{ x: '-200%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex flex-col mx-auto justify-center items-center px-16 relative"
              >
                <h1 className="text-4xl text-center hover:underline">
                  <a href="https://owlbeard.github.io/library-react/">
                    Library App
                  </a>
                </h1>
                <div className="flex items-center mb-52">
                  <button
                    className="text-6xl p-4"
                    onClick={() => pageDown(page)}
                  >
                    {'<'}
                  </button>
                  <a
                    className="mb-12 max-w-3xl"
                    href="https://owlbeard.github.io/library-react/"
                  >
                    <img src={projects[7]} alt="ekşi clone" />
                  </a>
                  <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                    {'>'}
                  </button>
                </div>
                <p className="max-w-4xl text-xl whitespace-pre-wrap text-center absolute bottom-24">
                  Library app where you can add or remove books that you have
                  read or still reading. Created with HTML, Tailwind CSS and
                  ReactJS. JavaScript code is written in TypeScript and bundled
                  with Vite.
                </p>
                <div className="flex gap-12 mt-4">
                  <button className="px-8 py-2 rounded-full bg-teal-500">
                    <a href="https://github.com/owlbeard/library-react">Code</a>
                  </button>
                  <button className="px-8 py-2 rounded-full bg-red-500">
                    <a href="https://owlbeard.github.io/library-react/">
                      Live Demo
                    </a>
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </m.section>
      <m.div
        key={page}
        variants={variants}
        animate={'show'}
        initial="hide"
        className="w-full flex gap-2 justify-center absolute 2xl:bottom-80 lg:bottom-72"
      >
        <svg
          onClick={() => setPage(1)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 1 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>1</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(2)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 2 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>2</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(3)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 3 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>3</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(4)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 4 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>4</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(5)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 5 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>5</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(6)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 6 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>6</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(7)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 7 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>7</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(8)}
          className={`md:w-24 w-16 cursor-pointer ${
            page === 8 ? 'black' : 'white'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>8</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
      </m.div>
    </>
  );
}
