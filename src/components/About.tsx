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
      <m.ul
        animate={{ y: 0 }}
        initial={{ y: '-200%' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center sm:gap-8 gap-1 over overflow-hidden p-2"
      >
        {stack.map((img) => {
          console.log(img);
          return (
            <li key={img} className="hover:scale-110 transition-transform">
              <img className="stack" src={img} alt="html5" />
            </li>
          );
        })}
      </m.ul>
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
        managers like NPM, and module bundlers like Webpack. Lately, I have
        started using Next.js framework and recently build my first website with
        it. But of course I'm not stopping here, I will gradually and
        consistently improve my knowledge on technologies I've been working on
        and add more to my tech stack continuously throughout my career.
      </m.div>
    </m.div>
  );
}
