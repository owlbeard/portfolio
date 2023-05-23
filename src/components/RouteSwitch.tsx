import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
