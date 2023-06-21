import { motion as m } from 'framer-motion';
import { useMediaQuery } from '../util/useMediaQuery';

const projects = Object.values(
  import.meta.glob('../assets/projects/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export default function Projects() {
  const matches = useMediaQuery('(min-width: 1536px)');
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="my-12 flex flex-col items-center justify-center content-center justify-items-center"
    >
      <div className="grid grid-cols-responsive justify-items-center gap-4">
        <div className="flex flex-col gap-4 p-2 sm:border-r-2 border-t-2 sm:border-t-0 border-teal-500">
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl  h-28">
            Todo List
          </h2>
          <a href="https://owlbeard.github.io/todo-list-react/">
            <img className="h-52" src={projects[0]} alt="Todo List" />
          </a>
          <p>
            Simple todo list app where you can create edit and delete tasks,
            create edit or delete projects add tasks to the projects etc.
            Created with React.js - in TypeScript - and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-2 lg:border-r-2 border-t-2 sm:border-t-0 border-teal-500">
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl h-28">
            Shopping Cart
          </h2>
          <a href="https://owlbeard.github.io/shopping-cart/">
            <img className="h-52" src={projects[1]} alt="Shopping Cart" />
          </a>
          <p>
            A shopping cart app where you can add any amount of items to your
            cart, you can also remove items or add more items in the checkout
            page. Created with HTML, Tailwind CSS, JS, ReactJS. Bundled with
            Vite.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-2 sm:border-r-2 md:border-r-2 lg:border-r-0 xl:border-r-2 border-t-2 sm:border-t-0 border-teal-500">
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl h-28">
            Weather App
          </h2>
          <a href="https://owlbeard.github.io/weather-app-react/">
            <img className="h-52" src={projects[2]} alt="Weather App" />
          </a>
          <p>
            Weather app that fetches data from WeatherAPI asynchronously to get
            weather data of any city the user searched in the search bar.
            Depending on the state of the weather of selected city, background
            will change accordingly! Created with HTML, plain CSS & Tailwind CSS
            and ReactJS. JavaScript code is written in TypeScript and bundled
            with Vite.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-2 lg:border-r-2 border-t-2 sm:border-t-0 border-teal-500">
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl h-28">
            Library App
          </h2>
          <a href="https://owlbeard.github.io/library-react/">
            <img className="h-52" src={projects[3]} alt="Library App" />
          </a>
          <p>
            Library app where you can add or remove books that you have read or
            still reading. Created with HTML, Tailwind CSS and ReactJS.
            JavaScript code is written in TypeScript and bundled with Vite.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-2 sm:border-r-2 2xl:border-r-0 border-t-2 sm:border-t-0 border-teal-500">
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl h-28">
            Timer App
          </h2>
          <a href="https://owlbeard.github.io/rest-api/">
            <img className="h-52" src={projects[4]} alt="Timer App" />
          </a>
          <p>
            Timer app where you can pick the amount of rest time you need and
            start the timer to work for 30 minutes. Background changes according
            to whether you are resting or working and an alert sound is played
            when the time is up! Works on background too, thanks to web workers.
            Created with TypeScript, ReactJS and TailwindCSS, bundled with Vite.
          </p>
        </div>
        {matches && (
          <>
            <div className="flex justify-center items-center text-6xl p-2 cursor-pointer hover:translate-x-4 transition-transform">
              {'>>'}
            </div>
            <div className="flex justify-center items-center border-r-2 border-teal-500 w-full text-6xl">
              {
                <p className="p-2 cursor-pointer hover:translate-x-4 transition-transform">
                  {'>>'}
                </p>
              }
            </div>
          </>
        )}
        <div
          className={`flex flex-col gap-4 p-2 border-t-2 sm:border-t-0  border-teal-500 2xl:border-r-2 ${
            matches ? 'col-start-3' : ''
          }`}
        >
          <h2 className="2xl:text-5xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-3xl h-28">
            Corporate Website
          </h2>
          <a href="https://yodesco.vercel.app">
            <img className="h-52" src={projects[5]} alt="Corporate Website" />
          </a>
          <p>
            In this project I have made a corporate website for one of my close
            relative's company. This is a mock-up version of it with placeholder
            texts and links. This is also my first Next.js project that I have
            deployed on Vercel. Created with Next.js, React.js, TypeScript,
            TailwindCSS.
          </p>
        </div>
        {matches && (
          <>
            <div className="flex justify-center items-center text-6xl p-2 cursor-pointer hover:-translate-x-4 transition-transform">
              {'<<'}
            </div>
            <div className="flex justify-center items-center text-6xl p-2 cursor-pointer hover:-translate-x-4 transition-transform">
              {'<<'}
            </div>
          </>
        )}
      </div>
    </m.div>
  );
}
