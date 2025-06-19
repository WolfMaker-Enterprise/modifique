export default function ServiceItemCard({ title, description }) {
  return (
    <div className="bg-white shadow rounded-xl p-5 text-left w-[300px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full border-2 border-[#B10017] flex items-center justify-center">
          <span className="text-[#B10017] font-bold">✓</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
      <p className="text-sm text-zinc-600 mt-1">{description}</p>
    </div>
  );
}
