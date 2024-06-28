"use client";

import { useData } from '@/context/DataContext';
import AnimatedNumber from '@/components/ui/animated-number';
import { UserPlus, ArrowUp, ArrowDown } from 'lucide-react';

const CardTotalSubscribersSummary = () => {
  const { accountData } = useData();
  const totalSubscribers = accountData.totalSubscribers;
  const percentageChange = ((accountData.totalSubscribers - accountData.totalSubscribersLastMonth) / accountData.totalSubscribersLastMonth) * 100;
  const isPositiveChange = percentageChange >= 0;

  return (
    <div className="w-card xl:w-3/12 flex-shrink-0 xl:flex-shrink bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Subscribers</h2>
        <div className="flex items-center justify-center bg-gray-50 rounded-xs p-2">
          <UserPlus size={16} color="#8C8C8C" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-4xl">
          <AnimatedNumber value={totalSubscribers} />
        </span>
        <div className={`flex items-center justify-between rounded-full py-1 px-2 ${isPositiveChange ? 'bg-success' : 'bg-danger-border'}`}>
          {isPositiveChange ? <ArrowUp size={12} color="#000000" /> : <ArrowDown size={12} color="#000000" />}
          <span className="ml-1 text-xs font-medium text-black">
            {isPositiveChange ? '+' : ''}{percentageChange.toFixed(2)}%
          </span>
        </div>
      </div>
      <span className="flex text-xs text-gray-400 mt-2">From last month updated</span>
    </div>
  );
};

export default CardTotalSubscribersSummary;
