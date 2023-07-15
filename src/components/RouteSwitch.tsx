import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ProjectsNew from './ProjectsNew';
import { useMediaQuery } from '../util/useMediaQuery';

export default function RouteSwitch() {
  const matches = useMediaQuery('(min-width: 640px)');
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      {matches ? (
        <Route path="/projects" element={<ProjectsNew />} />
      ) : (
        <Route path="projects" element={<Projects />} />
      )}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
