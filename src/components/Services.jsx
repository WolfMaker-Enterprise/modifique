import NurseImage from "../assets/nurce_1.png";
import NurceBg from "../assets/back_ground_nurce_1.jpg";
import TextGradient from "./ui/TextGradiant";
import ServiceItemCard from "./ServiceItemCard";

console.log("NurseImage:", NurseImage, "NurceBg:", NurceBg); // Debug: veja se os caminhos estão corretos

export default function Services() {
  return (
    <section id="servicos" className="bg-[#FFF1F4] py-10 px-4">
      <div className="max-w-7xl mx-auto h-auto flex flex-col md:flex-row items-start gap-12">
        {/* Imagem da doutora */}
        <div className="relative w-full max-w-[320px] h-[400px] rounded-full overflow-visible flex-shrink-0 mx-auto md:mx-0">
          <img
            src={NurceBg}
            alt="Fundo da Doutora"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <img
            src={NurseImage}
            alt="Imagem da Doutora"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>

        {/* Texto e cards */}
        <div className="w-full">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-800">
              Tratamentos de excelência com foco <br />
              em <TextGradient word="estética e funcionalidade" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <ServiceItemCard
              title="Implantes Dentários"
              description="Reposição definitiva de dentes com tecnologia e segurança."
            />
            <ServiceItemCard
              title="Lentes de Contato Dental"
              description="Sorrisos harmônicos, naturais e personalizados para você."
            />
            <ServiceItemCard
              title="Harmonização Facial"
              description="Realce da beleza facial com equilíbrio e precisão estética."
            />
            <ServiceItemCard
              title="Próteses dentarias"
              description="Restauração do sorriso com conforto e harmonia estética."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
