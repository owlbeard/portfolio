import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="container flex justify-around gap-4 text-xl mt-4">
      <Link
        to="/"
        className="px-7 border-b-4 border-b-transparent hover:border-b-blue-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="px-7 border-b-4 border-b-transparent hover:border-b-lime-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        About
      </Link>

      <Link
        to="/projects"
        className="px-7 border-b-4 border-b-transparent hover:border-b-red-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Projects
      </Link>

      <Link
        to="/contact"
        className="px-7 border-b-4 border-b-transparent hover:border-b-teal-500 hover:-translate-y-1 hover:scale-110 transition-transform"
      >
        Contact
      </Link>
    </nav>
  );
}
