import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/theChef.jpg';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="flex flex-col items-center"
    >
      <h1 className="2xl:text-8xl xl:text-6xl l:text-6xl md:text-6xl sm:text-6xl text-3xl">
        Ömer Faruk Altun
      </h1>
      <h2 className="2xl:text-6xl xl:text-4xl l:text-4xl md:text-4xl sm:text-4xl text-xl">
        Frontend Web Developer
      </h2>
      <img
        className="2xl:max-w-md xl:max-w-md lg:max-w-sm md:max-w-sm sm:max-w-sm rounded-full hover:rotate-180 transition-transform"
        src={HeroImage}
        alt="Tech stack"
      />
      <p className="text-2xl">
        <span>Check out some of my </span>
        <Link to="/projects">
          <button
            id="project"
            className="p-2 rounded-lg bg-teal-400 text-white"
          >
            Projects
          </button>
        </Link>
      </p>
    </motion.div>
  );
}
