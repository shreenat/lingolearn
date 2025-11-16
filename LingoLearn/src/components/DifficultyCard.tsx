import type { Difficulty } from '../types';

interface DifficultyCardProps {
  difficulty: Difficulty;
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

function DifficultyCard({ label, description, selected, onClick }: DifficultyCardProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FFB366] hover:bg-[#FFA84D] transition-all rounded-lg sm:rounded-xl p-4 sm:p-6 text-left w-full ${
        selected ? 'ring-4 ring-blue-500' : ''
      }`}
    >
      <h4 className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2">
        {label}
      </h4>
      <p className="text-white text-sm sm:text-base opacity-90">
        {description}
      </p>
    </button>
  );
}

export default DifficultyCard;