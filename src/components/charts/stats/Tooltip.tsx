import { FC } from 'react';

interface TooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const StatsTooltip: FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col w-48 p-4 bg-white rounded-sm shadow-md">
        <h3 className="mb-2 text-sm font-medium text-black">{label}</h3>
        {payload.map((data, index) => (
          <div key={index} className="flex items-center mb-1">
            <span className="w-2.5 h-2.5 mr-2 rounded-full" style={{ background: data.color }}></span>
            <span className="text-xs font-medium text-black">{data.name}:</span>
            <span className="ml-auto text-xs font-medium text-black">{data.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default StatsTooltip;