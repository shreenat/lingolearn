import type { Language } from '../types';

interface LanguageCardProps {
  language: Language;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function LanguageCard({ language, label, selected, onClick }: LanguageCardProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FFB366] hover:bg-[#FFA84D] transition-all rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 w-full ${
        selected ? 'ring-4 ring-blue-500' : ''
      }`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D1D5DB] rounded flex items-center justify-center flex-shrink-0">
        <span className="text-xs sm:text-sm font-semibold text-gray-600">img</span>
      </div>
      <span className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase">
        {label}
      </span>
    </button>
  );
}

export default LanguageCard;