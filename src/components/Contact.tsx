import { motion as m } from 'framer-motion';
import Cat from '../assets/github.svg';
import In from '../assets/in.png';

export default function Contact() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="my-12 p-1 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl text-center"
        >
          Get in touch!
        </m.h1>
      </div>
      <div className="overflow-hidden p-1">
        <m.div
          className="flex flex-col container gap-4 "
          animate={{ x: 0 }}
          initial={{ x: '100%' }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <div>
            <p>email: omeraltun96@gmail.com</p>
          </div>
          <div className="flex items-center gap-8">
            <p>github:</p>
            <a href="https://github.com/owlbeard">
              <img
                className="contact hover:scale-110 transition-transform"
                src={Cat}
                alt="github"
              />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p>linkedin:</p>
            <a href="https://www.linkedin.com/in/omer1996/">
              <img
                className="contact hover:scale-110 transition-transform"
                src={In}
                alt="linkedin"
              />
            </a>
          </div>
        </m.div>
      </div>
    </m.div>
  );
}
