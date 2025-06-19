import logo from "../assets/logo_bordo.png";

function NavBar() {
  return (
    <nav id="inicio" className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <NavBarListItem text="Inicio" href="#inicio" />
          <NavBarListItem text="Resultados" href="#resultados" />
          <NavBarListItem text="Sobre nós" href="#sobre" />
          <NavBarListItem text="Serviços" href="#servicos" />
          <NavBarListItem text="Depoimentos" href="#depoimentos" />
          <NavBarListItem text="Contato" href="#contato" />
        </ul>
      </div>
    </nav>
  );
}

function NavBarListItem({ text, href }) {
  return (
    <li>
      <a href={href} className="hover:text-red-700 transition">
        {text}
      </a>
    </li>
  );
}

export default NavBar;
