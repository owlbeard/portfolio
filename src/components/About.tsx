import { motion as m } from 'framer-motion';

const stack = Object.values(
  import.meta.glob('../assets/stack/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export default function About() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <ul className="flex items-center justify-center sm:gap-4 gap-1 over overflow-hidden p-2">
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5 }}
        >
          <img className="stack" src={stack[2]} alt="html5" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img className="stack" src={stack[0]} alt="css3" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img className="stack" src={stack[3]} alt="JavaScript" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <img className="stack" src={stack[5]} alt="react" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <img className="stack" src={stack[7]} alt="TypeScript" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-500%' }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <img className="stack" src={stack[6]} alt="Tailwind css" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <img className="stack" src={stack[1]} alt="git" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <img className="stack" src={stack[4]} alt="npm" />
        </m.li>
        <m.li
          animate={{ y: 0 }}
          initial={{ y: '-200%' }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          <img className="stack" src={stack[8]} alt="webpack" />
        </m.li>
      </ul>
      <m.div
        className="2xl:text-3xl xl:text-xl l:text-xl md:text-xl sm:text-xl text-lg mb-8"
        animate={{ y: 0 }}
        initial={{ y: '100%' }}
      >
        My name is Ömer Faruk Altun and I'm a frontend web developer. I have
        started this journey in February 2023 and have come a long way since
        then. In quick succession, I have established a solid knowledge in
        frontend web technologies such as; HTML, CSS, JavaScript, React,
        TypeScript, Tailwind CSS, version control systems like Git, package
        managers like NPM, and module bundlers like Webpack. But of course I'm
        not stopping here, I will gradually and consistently improve my
        knowledge on technologies I've been working on and add more to my tech
        stack continuously throughout my career.
      </m.div>
    </m.div>
  );
}
