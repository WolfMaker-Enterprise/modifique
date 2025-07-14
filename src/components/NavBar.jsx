import { useState } from "react";
import logo from "../assets/logo_bordo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      id="inicio"
      className="relative bg-gray-50 border-b border-gray-200 md:fixed md:top-0 md:left-0 md:right-0 md:z-50"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700">
          <NavBarListItem text="Inicio" href="#inicio" />
          <NavBarListItem text="Resultados" href="#resultados" />
          <NavBarListItem text="Sobre nós" href="#sobre" />
          <NavBarListItem text="Serviços" href="#servicos" />
          <NavBarListItem text="Depoimentos" href="#depoimentos" />
          <NavBarListItem text="Contato" href="#contato" />
        </ul>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-50 border-t border-gray-200 transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-sm font-medium text-gray-700">
          <NavBarListItem text="Inicio" href="#inicio" closeMenu={closeMenu} />
          <NavBarListItem
            text="Resultados"
            href="#resultados"
            closeMenu={closeMenu}
          />
          <NavBarListItem
            text="Sobre nós"
            href="#sobre"
            closeMenu={closeMenu}
          />
          <NavBarListItem
            text="Serviços"
            href="#servicos"
            closeMenu={closeMenu}
          />
          <NavBarListItem
            text="Depoimentos"
            href="#depoimentos"
            closeMenu={closeMenu}
          />
          <NavBarListItem
            text="Contato"
            href="#contato"
            closeMenu={closeMenu}
          />
        </ul>
      </div>
    </nav>
  );
}

function NavBarListItem({ text, href, closeMenu }) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-red-700 transition"
        onClick={closeMenu}
      >
        {text}
      </a>
    </li>
  );
}

export default NavBar;
