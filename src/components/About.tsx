import { motion } from 'framer-motion';

const stack = Object.values(
  import.meta.glob('../assets/stack/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url',
  })
);

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="2xl:text-3xl xl:text-xl l:text-xl md:text-xl sm:text-xl text-lg mb-8">
        My name is Ömer Faruk Altun and I'm a frontend web developer. I have
        started this journey in February 2023 and have come a long way since
        then. In quick succession, I have established a solid knowledge in
        frontend web technologies such as; HTML, CSS, JavaScript, React,
        TypeScript, Tailwind CSS, version control systems like Git, package
        managers like NPM, and module bundlers like Webpack. But of course I'm
        not stopping here, I will gradually and consistently improve my
        knowledge on technologies I've been working on and add more to my tech
        stack continuously throughout my career.
      </div>
      <ul className="flex items-center justify-center gap-4 flex-wrap">
        <li>
          <img className="stack" src={stack[2]} alt="html5" />
        </li>
        <li>
          <img className="stack" src={stack[0]} alt="css3" />
        </li>
        <li>
          <img className="stack" src={stack[3]} alt="JavaScript" />
        </li>
        <li>
          <img className="stack" src={stack[5]} alt="react" />
        </li>
        <li>
          <img className="stack" src={stack[7]} alt="TypeScript" />
        </li>
        <li>
          <img className="stack" src={stack[6]} alt="Tailwind css" />
        </li>
        <li>
          <img className="stack" src={stack[1]} alt="git" />
        </li>
        <li>
          <img className="stack" src={stack[4]} alt="npm" />
        </li>
        <li>
          <img className="stack" src={stack[8]} alt="webpack" />
        </li>
      </ul>
    </motion.div>
  );
}
