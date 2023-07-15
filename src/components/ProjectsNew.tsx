import { useState } from 'react';

const projects = Object.values(
  import.meta.glob('../assets/projects/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

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
      <section className="flex flex-col py-4 relative">
        <div className="flex items-center relative ">
          {page === 1 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://eksiclone.vercel.app/">ekşisözlük clone</a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://eksiclone.vercel.app/"
                >
                  <img src={projects[0]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
                A fully responsive ekşisözlük clone website which has all the
                front-end features of the original website. I have used my own
                placeholder database since ekşisözlük doesn't have an API. Made
                with Next.js, TypeScript and TailwindCSS.
              </p>
              <div className="flex gap-12 mt-4">
                <button className="px-8 py-2 rounded-full bg-teal-500">
                  <a href="https://github.com/owlbeard/eksi-clone-next">Code</a>
                </button>
                <button className="px-8 py-2 rounded-full bg-red-500">
                  <a href="https://eksiclone.vercel.app/">Live Demo</a>
                </button>
              </div>
            </div>
          ) : page === 2 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://owlbeard.github.io/todo-list-react">
                  Todo App
                </a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://owlbeard.github.io/todo-list-react"
                >
                  <img src={projects[1]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
                Simple todo list app where you can create edit and delete tasks,
                create, edit or delete projects add tasks to the projects etc.
                Created with React.js - in TypeScript - and Tailwind CSS.
              </p>
              <div className="flex gap-12 mt-4">
                <button className="px-8 py-2 rounded-full bg-teal-500">
                  <a href="https://github.com/owlbeard/todo-list-react">Code</a>
                </button>
                <button className="px-8 py-2 rounded-full bg-red-500">
                  <a href="https://owlbeard.github.io/todo-list-react">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          ) : page === 3 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://yodesco.vercel.app/">Corporate Website</a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://yodesco.vercel.app/"
                >
                  <img src={projects[2]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
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
            </div>
          ) : page === 4 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://owlbeard.github.io/rest-api/">Timer App</a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://owlbeard.github.io/rest-api/"
                >
                  <img src={projects[3]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
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
            </div>
          ) : page === 5 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://owlbeard.github.io/shopping-cart/">
                  Shopping Cart
                </a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://owlbeard.github.io/shopping-cart/"
                >
                  <img src={projects[4]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
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
            </div>
          ) : page === 6 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://owlbeard.github.io/memory-card">
                  Memory Cards
                </a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://owlbeard.github.io/memory-card"
                >
                  <img src={projects[5]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
                A Bleach Memory Card game where you can try to memorize which
                card you haven't clicked yet. In order to score high you must
                click each card exactly once!
              </p>
              <div className="flex gap-12 mt-4">
                <button className="px-8 py-2 rounded-full bg-teal-500">
                  <a href="https://github.com/owlbeard/memory-card">Code</a>
                </button>
                <button className="px-8 py-2 rounded-full bg-red-500">
                  <a href="https://owlbeard.github.io/memory-card">Live Demo</a>
                </button>
              </div>
            </div>
          ) : page === 7 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://owlbeard.github.io/weather-app-react/">
                  Weather App
                </a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://owlbeard.github.io/weather-app-react/"
                >
                  <img src={projects[6]} alt="weather app" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-4xl text-xl whitespace-pre-wrap text-center">
                Weather app that fetches data from WeatherAPI asynchronously to
                get weather data of any city the user searched in the search
                bar. Depending on the state of the weather of selected city,
                background will change accordingly! Created with HTML, plain CSS
                & Tailwind CSS and ReactJS. JavaScript code is written in
                TypeScript and bundled with Vite.
              </p>
              <div className="flex gap-12 mt-4">
                <button className="px-8 py-2 rounded-full bg-teal-500">
                  <a href="https://github.com/owlbeard/yodesco">Code</a>
                </button>
                <button className="px-8 py-2 rounded-full bg-red-500">
                  <a href="https://owlbeard.github.io/weather-app-react/">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          ) : page === 8 ? (
            <div className="flex flex-col mx-auto justify-center items-center px-16">
              <h1 className="text-4xl text-center hover:underline">
                <a href="https://yodesco.vercel.app/">Corporate Website</a>
              </h1>
              <div className="flex items-center">
                <button className="text-6xl p-4" onClick={() => pageDown(page)}>
                  {'<'}
                </button>
                <a
                  className="mb-12 max-w-7xl"
                  href="https://yodesco.vercel.app/"
                >
                  <img src={projects[7]} alt="ekşi clone" />
                </a>
                <button className="text-6xl p-4" onClick={() => pageUp(page)}>
                  {'>'}
                </button>
              </div>
              <p className="max-w-7xl text-xl whitespace-pre-wrap text-center">
                {
                  'Simple todo list app where you can create edit and delete tasks,\ncreate, edit or delete projects add tasks to the projects etc.\nCreated with React.js - in TypeScript - and Tailwind CSS.'
                }
              </p>
              <div className="flex gap-12 mt-4">
                <button className="px-8 py-2 rounded-full bg-teal-500">
                  <a href="https://github.com/owlbeard/yodesco">Code</a>
                </button>
                <button className="px-8 py-2 rounded-full bg-red-500">
                  <a href="https://yodesco.vercel.app/">Live Demo</a>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <div className="w-full flex gap-2 justify-center absolute bottom-32">
        <svg
          onClick={() => setPage(1)}
          className={`w-24 cursor-pointer ${page === 1 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(2)}
          className={`w-24 cursor-pointer ${page === 2 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(3)}
          className={`w-24 cursor-pointer ${page === 3 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(4)}
          className={`w-24 cursor-pointer ${page === 4 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(5)}
          className={`w-24 cursor-pointer ${page === 5 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(6)}
          className={`w-24 cursor-pointer ${page === 6 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(7)}
          className={`w-24 cursor-pointer ${page === 7 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
        <svg
          onClick={() => setPage(8)}
          className={`w-24 cursor-pointer ${page === 8 ? 'black' : 'white'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-small</title>
          <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        </svg>
      </div>
    </>
  );
}
