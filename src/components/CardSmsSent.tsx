"use client";

import { useData } from '@/context/DataContext';
import AnimatedNumber from '@/components/ui/animated-number';
import { Send, ArrowUp, ArrowDown } from 'lucide-react';

const CardSmsSent = () => {
  const { accountData } = useData();
  const smsSent = accountData.smsSent;
  const percentageChange = ((accountData.smsSent - accountData.smsSentLastMonth) / accountData.smsSentLastMonth) * 100;
  const isPositiveChange = percentageChange >= 0;

  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">SMS Sent</h2>
        <div className="flex items-center justify-center bg-mainBlue-tertiary rounded-xs p-2">
          <Send size={16} className="text-black" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-4xl">
          <AnimatedNumber value={smsSent} />
        </span>
        <div className={`flex items-center justify-between rounded-full py-1 px-2 border ${isPositiveChange ? 'bg-mainGreen-tertiary border-mainGreen' : 'bg-danger border-danger-border'}`}>
          {isPositiveChange ? <ArrowUp size={12} className="color-mainGreen stroke-mainGreen" /> : <ArrowDown size={12} className="stroke-danger-text" />}
          <span className={`ml-1 text-xs font-medium ${isPositiveChange ? 'text-mainGreen' : 'text-danger-text'}`}>
            {isPositiveChange ? '+' : ''}{percentageChange.toFixed(2)}%
          </span>
        </div>
      </div>
      <span className="flex text-xs text-gray-400 mt-2">From last month updated</span>
    </div>
  );
};

export default CardSmsSent;
