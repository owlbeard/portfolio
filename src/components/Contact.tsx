import { motion } from 'framer-motion';
import Cat from '../assets/github.svg';
import In from '../assets/in.png';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="flex flex-col container gap-4 ">
        <div>
          <p>email: omeraltun96@gmail.com</p>
        </div>
        <div className="flex items-center gap-6">
          <p>github:</p>
          <a href="https://github.com/owlbeard">
            <img className="contact" src={Cat} alt="github" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <p>linkedin:</p>
          <a href="https://www.linkedin.com/in/omer1996/">
            <img className="contact" src={In} alt="linkedin" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
