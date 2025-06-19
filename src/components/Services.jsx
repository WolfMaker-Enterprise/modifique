import NurseBackground from "../assets/back_ground_nurce_1.jpg";
import NurseImage from "../assets/nurce_1.png";
import LogoServices from "../assets/logo_services.jpg";
import TextGradient from "./ui/TextGradiant";
import ServiceItemCard from "./ServiceItemCard";

export default function Services() {
  return (
    <section id="servicos" className="bg-[#FFF1F4] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="relative w-full md:w-[320px] h-[400px] rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src={NurseBackground}
            alt="Fundo da Doutora"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={NurseImage}
            alt="Imagem da Doutora"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>

        <div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800">
              Tratamentos de excelência com foco <br />
              em <TextGradient word="estética e funcionalidade" />
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[20px]">
            <ServiceItemCard
              title="Implantes Dentários"
              description="Reposição definitiva de dentes com tecnologia e segurança."
            />
            <ServiceItemCard
              title="Lentes de Contato Dental"
              description="Sorrisos harmônicos, naturais e personalizados para você."
            />
            <ServiceItemCard
              title="Rinoplastia & Harmonização Facial"
              description="Realce da beleza facial com equilíbrio e precisão estética."
            />
            <div className="w-[300px] h-auto rounded-3xl overflow-hidden mx-auto md:mx-0">
              <img
                src={LogoServices}
                alt="Logo Modifique"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
