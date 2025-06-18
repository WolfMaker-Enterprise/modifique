import { FaInstagram, FaFacebookF, FaPhoneAlt, FaHome } from 'react-icons/fa';
import logo from '../assets/logo_dourada.png'; 

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#9f0011] to-[#63001c] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          
          <a href="#inicio"><img src={logo} alt="Logo Modifique" className="w-48" /></a>

          <nav className="flex gap-4 flex-wrap justify-center text-sm font-medium">
            <a href="#inicio" className="hover:text-yellow-300 transition">Início</a>
            <a href="#resultados" className="hover:text-yellow-300 transition">Resultados</a>
            <a href="#sobre" className="hover:text-yellow-300 transition">Sobre nós</a>
            <a href="#servicos" className="hover:text-yellow-300 transition">Serviços</a>
            <a href="#depoimentos" className="hover:text-yellow-300 transition">Depoimentos</a>
            <a href="#contato" className="hover:text-yellow-300 transition">Contato</a>
          </nav>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/modifiqueodontologia/" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span>(51) 99990-0116</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHome className="text-white" />
            <span>Av. José Loureiro da Silva, 1428, Gravataí, RS</span>
          </div>
        </div>

        <hr className="w-full border-t border-white/30" />

        <p className="text-xs text-center text-white/70">
          © 2025 Modifique Odontologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
