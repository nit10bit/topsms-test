"use client";

import { useData } from '@/context/DataContext';
import AnimatedNumber from '@/components/ui/animated-number';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const CardTotalUnsubscribers = () => {
  const { accountData } = useData();
  const totalUnsubscribers = accountData.totalUnsubscribers;
  const percentageChange = ((accountData.totalUnsubscribers - accountData.totalUnsubscribersLastMonth) / accountData.totalUnsubscribersLastMonth) * 100;
  const isPositiveChange = percentageChange >= 0;
  console.log('percentageChange ', percentageChange)

  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Total Unsubscribers</h2>
        <div className="flex items-center justify-center bg-mainBlue-tertiary rounded-xs p-2">
          <Image src="/icon-users-minus.svg" alt="-" width={16} height={16} className="fill-black" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-4xl">
          <AnimatedNumber value={totalUnsubscribers} />
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

export default CardTotalUnsubscribers;
