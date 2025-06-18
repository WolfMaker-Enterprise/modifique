import logo from '../assets/logo_bordo.png';

function NavBar () {
    return(

        <nav id="inicio" className="bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>

                <ul className="flex space-x-6 text-sm font-medium text-gray-700">
                    <li><a href="#inicio" className="hover:text-red-700 transition">Inicio</a></li>
                    <li><a href="#resultados" className="hover:text-red-700 transition">Resultados</a></li>
                    <li><a href="#sobre" className="hover:text-red-700 transition">Sobre nós</a></li>
                    <li><a href="#servicos" className="hover:text-red-700 transition">Serviços</a></li>
                    <li><a href="#depoimentos" className="hover:text-red-700 transition">Depoimentos</a></li>
                    <li><a href="#contato" className="hover:text-red-700 transition">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;