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
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://eksiclone.vercel.app/">
            <h2 className="text-3xl  hover:underline">ekşisözlük Clone</h2>
          </a>
          <a href="https://owlbeard.github.io/todo-list-react/">
            <img className="h-52" src={projects[0]} alt="Todo List" />
          </a>
          <p>
            A fully responsive ekşisözlük clone which has all the front-end
            features of the original website. I have used my own placeholder
            database since ekşisözlük doesn't have an API. Made with Next.js,
            TypeScript and TailwindCSS.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/eksi-clone-next">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://eksiclone.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2 border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/todo-list-react">
            <h2 className="text-3xl  hover:underline">Todo List</h2>
          </a>
          <a href="https://owlbeard.github.io/todo-list-react">
            <img className="h-52" src={projects[1]} alt="Shopping Cart" />
          </a>
          <p>
            Simple todo list app where you can create edit and delete tasks,
            create, edit or delete projects add tasks to the projects etc.
            Created with React.js - in TypeScript - and Tailwind CSS.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/todo-list-react">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/todo-list-react">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://yodesco.vercel.app/">
            <h2 className="text-3xl  hover:underline">Corporate Website</h2>
          </a>
          <a href="https://yodesco.vercel.app/">
            <img className="h-52" src={projects[2]} alt="Todo List" />
          </a>
          <p>
            In this project I have made a corporate website for one of my close
            relative's company. This is a mock-up version of it with placeholder
            texts and links. This is also my first Next.js project that I have
            deployed on Vercel. Created with Next.js, React.js, TypeScript,
            TailwindCSS.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/yodesco">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://yodesco.vercel.app/">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/rest-api/">
            <h2 className="text-3xl  hover:underline">Timer App</h2>
          </a>
          <a href="https://owlbeard.github.io/rest-api/">
            <img className="h-52" src={projects[3]} alt="Todo List" />
          </a>
          <p>
            Timer app where you can pick the amount of rest time you need and
            start the timer to work for 30 minutes. Background changes according
            to whether you are resting or working and an alert sound is played
            when the time is up! Works on background too, thanks to web workers.
            Created with TypeScript, ReactJS and TailwindCSS, bundled with Vite.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/rest-api">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/rest-api/">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/shopping-cart/">
            <h2 className="text-3xl  hover:underline">Shopping Cart</h2>
          </a>
          <a href="https://owlbeard.github.io/shopping-cart/">
            <img className="h-52" src={projects[4]} alt="Todo List" />
          </a>
          <p>
            A shopping cart app where you can add any amount of items to your
            cart, you can also remove items or add more items in the checkout
            page. Created with HTML, Tailwind CSS, JS, ReactJS. Bundled with
            Vite.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/shopping-cart">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/shopping-cart/">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/memory-card">
            <h2 className="text-3xl  hover:underline">Memory Cards</h2>
          </a>
          <a href="https://owlbeard.github.io/memory-card">
            <img className="h-52" src={projects[5]} alt="Todo List" />
          </a>
          <p>
            A Bleach Memory Card game where you can try to memorize which card
            you haven't clicked yet. In order to score high you must click each
            card exactly once!
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/memory-card">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/memory-card">Live Demo</a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/weather-app-react/">
            <h2 className="text-3xl  hover:underline">Weather App</h2>
          </a>
          <a href="https://owlbeard.github.io/weather-app-react/">
            <img className="h-52" src={projects[6]} alt="Todo List" />
          </a>
          <p>
            Weather app that fetches data from WeatherAPI asynchronously to get
            weather data of any city the user searched in the search bar.
            Depending on the state of the weather of selected city, background
            will change accordingly! Created with HTML, plain CSS & Tailwind CSS
            and ReactJS. JavaScript code is written in TypeScript and bundled
            with Vite.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/weather-app-react">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/weather-app-react/">
                Live Demo
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2  border-t-2  border-teal-500">
          <a href="https://owlbeard.github.io/library-react/">
            <h2 className="text-3xl  hover:underline">Library App</h2>
          </a>
          <a href="https://owlbeard.github.io/library-react/">
            <img className="h-52" src={projects[7]} alt="Todo List" />
          </a>
          <p>
            Library app where you can add or remove books that you have read or
            still reading. Created with HTML, Tailwind CSS and ReactJS.
            JavaScript code is written in TypeScript and bundled with Vite.
          </p>
          <div className="flex gap-12 mt-4 justify-center">
            <button className="px-8 py-2 rounded-full bg-teal-500">
              <a href="https://github.com/owlbeard/library-react">Code</a>
            </button>
            <button className="px-8 py-2 rounded-full bg-red-500">
              <a href="https://owlbeard.github.io/library-react/">Live Demo</a>
            </button>
          </div>
        </div>
      </div>
    </m.div>
  );
}
