"use client";

import { useData } from '@/context/DataContext';
import AnimatedNumber from '@/components/ui/animated-number';
import { UserMinus, ArrowDown } from 'lucide-react';

const CardTotalUnsubscribers = () => {
  const { accountData } = useData();
  const totalUnsubscribers = accountData.totalUnsubscribers;
  const percentageChange = ((accountData.totalUnsubscribers - accountData.totalUnsubscribersLastMonth) / accountData.totalUnsubscribersLastMonth) * 100;

  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Total Unsubscribers</h2>
        <div className="flex items-center justify-center bg-gray-50 rounded-xs p-2">
          <UserMinus size={16} color="#8C8C8C" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-4xl">
          <AnimatedNumber value={totalUnsubscribers} />
        </span>
        <div className="flex items-center justify-between rounded-full py-1 px-2 bg-danger">
          <ArrowDown size={12} color="#000000" />
          <span className="ml-1 text-xs font-medium text-black">
            -{percentageChange.toFixed(2)}%
          </span>
        </div>
      </div>
      <span className="flex text-xs text-gray-400 mt-2">From last month updated</span>
    </div>
  );
};

export default CardTotalUnsubscribers;
