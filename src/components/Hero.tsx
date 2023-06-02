import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/omar.jpeg';

export default function Hero() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex flex-col items-center"
    >
      <div className="p-2 overflow-hidden text-center">
        <p className="2xl:text-4xl xl:text-2xl l:text-2xl md:text-2xl sm:text-2xl text-xl ">
          Hello, I'm
        </p>
        <m.h1
          className="2xl:text-8xl xl:text-6xl l:text-6xl md:text-6xl sm:text-6xl text-3xl text-blue-500"
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ duration: 0.7 }}
        >
          Ömer F. Altun
        </m.h1>
        <m.h2
          className="2xl:text-4xl xl:text-2xl l:text-2xl md:text-2xl sm:text-2xl text-xl"
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ duration: 0.7 }}
        >
          Frontend Web Developer
        </m.h2>
      </div>
      <div className="overflow-hidden ">
        <m.img
          animate={{ opacity: '100%' }}
          initial={{ opacity: '0%' }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-48 w-48 2xl:max-w-md xl:max-w-md lg:max-w-sm md:max-w-sm sm:max-w-sm max-h-96 rounded-fifty transition-transform"
          src={HeroImage}
          alt="Dev_Sharp"
        />
      </div>
      <div className="overflow-hidden p-2">
        <m.p
          className="text-2xl flex flex-wrap justify-center items-center gap-2"
          animate={{ y: 0 }}
          initial={{ y: '175%' }}
          transition={{ delay: 1 }}
        >
          <span>Check out some of my </span>
          <Link to="/projects">
            <button
              id="project"
              className="p-2 rounded-lg bg-teal-400 text-white hover:scale-110 transition-transform"
            >
              Projects
            </button>
          </Link>
        </m.p>
      </div>
    </m.div>
  );
}
