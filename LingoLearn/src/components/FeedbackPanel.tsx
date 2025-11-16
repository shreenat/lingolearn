import { useState } from 'react';

interface FeedbackPanelProps {
  feedbackItems: string[];
}

function FeedbackPanel({ feedbackItems }: FeedbackPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFB366] rounded-lg transition-all">
      {/* Collapsed State */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#FFA84D] transition-colors rounded-lg"
        >
          <span className="text-white font-semibold text-sm sm:text-base">Feedback</span>
          <span className="text-white text-xl">▼</span>
        </button>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="p-4">
          <button
            onClick={() => setIsExpanded(false)}
            className="w-full flex items-center justify-between mb-3 hover:opacity-80 transition-opacity"
          >
            <span className="text-white font-semibold text-sm sm:text-base">Feedback</span>
            <span className="text-white text-xl">▲</span>
          </button>
          <ul className="space-y-2">
            {feedbackItems.map((feedback, index) => (
              <li key={index} className="text-white text-sm sm:text-base">
                • {feedback}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FeedbackPanel;