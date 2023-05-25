import { motion as m } from 'framer-motion';

const projects = Object.values(
  import.meta.glob('../assets/projects/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export default function Projects() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex flex-col items-center justify-center"
    >
      <div className="grid grid-cols-responsive gap-4">
        <div>
          <h2 className="2xl:text-6xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-xl">
            Todo List
          </h2>
          <img src={projects[0]} alt="Todo List" />
          <p>
            Simple todo list app where you can create edit and delete tasks,
            create edit or delete projects add tasks to the projects etc.
            Created with vanilla JS, HTML and CSS. Bundled with WebPack, several
            npm packages were used.
          </p>
        </div>
        <div>
          <h2 className="2xl:text-6xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-xl">
            Weather App
          </h2>
          <img src={projects[2]} alt="Weather App" />
          <p>
            Weather app that fetches data from WeatherAPI asynchronously to get
            weather data of any city the user searched in the search bar.
            Depending on the state of the weather of selected city, background
            will change accordingly! Created with vanilla JS, HTML and CSS.
            Bundled with WebPack.
          </p>
        </div>
        <div>
          <h2 className="2xl:text-6xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-xl">
            Shopping Cart
          </h2>
          <img src={projects[1]} alt="Shopping Cart" />
          <p>
            A shopping cart app where you can add any amount of items to your
            cart, you can also remove items or add more items in the checkout
            page. Created with HTML, CSS, JS, React.
          </p>
        </div>
      </div>
    </m.div>
  );
}
