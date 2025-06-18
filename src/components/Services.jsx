import NurseBackground from "../assets/back_ground_nurce_1.jpg";
import NurseImage from "../assets/nurce_1.png";
import LogoServices from "../assets/logo_services.jpg";

export default function Services() {
    return (
        <section id="servicos" className="bg-[#FFF1F4] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
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

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-800">
                Tratamentos de excelência com foco <br />
                em <span className="text-[#B10017] font-bold">estética e funcionalidade</span>
                </h2>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full border-2 border-[#B10017] flex items-center justify-center">
                    <span className="text-[#B10017] font-bold">✓</span>
                </div>
                </div>
                <h3 className="text-lg font-semibold text-zinc-800">
                Implantes <span className="text-[#B10017]">Dentários</span>
                </h3>
                <p className="text-sm text-zinc-600 mt-1">
                Reposição definitiva de dentes com tecnologia e segurança.
                </p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full border-2 border-[#B10017] flex items-center justify-center">
                    <span className="text-[#B10017] font-bold">✓</span>
                </div>
                </div>
                <h3 className="text-lg font-semibold text-zinc-800">
                Lentes de Contato Dental
                </h3>
                <p className="text-sm text-zinc-600 mt-1">
                Sorrisos harmônicos, naturais e personalizados para você.
                </p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full border-2 border-[#B10017] flex items-center justify-center">
                    <span className="text-[#B10017] font-bold">✓</span>
                </div>
                </div>
                <h3 className="text-lg font-semibold text-zinc-800">
                Rinoplastia & Harmonização Facial
                </h3>
                <p className="text-sm text-zinc-600 mt-1">
                Realce da beleza facial com equilíbrio e precisão estética.
                </p>
            </div>

            <div className="w-[300px] h-auto rounded-3xl overflow-hidden mx-auto md:mx-0">
                <img
                    src={LogoServices}
                    alt="Logo Modifique"
                    className="w-full h-auto object-contain"
                />
            </div>
            </div>
        </div>
        </section>
    );
}
