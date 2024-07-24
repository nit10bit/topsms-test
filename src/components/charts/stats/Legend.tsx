import { FC } from 'react';

interface StatsLegendProps {
  payload?: any[];
}

const StatsLegend: FC<StatsLegendProps> = ({ payload }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center mt-4">
      {payload?.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center mr-4 mb-2">
          <div className="w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
          <span className="text-sm font-medium text-gray-700">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsLegend;