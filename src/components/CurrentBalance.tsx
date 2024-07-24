import { FC } from 'react';
import { useData } from '@/context/DataContext';
import {
  Plus
} from "lucide-react"
import Image from 'next/image';

const BalanceCard: FC = () => {
  const { user } = useData();

  return (
    <div className="flex flex-column justify-center gap-4 lg:flex-row items-center md:gap-2">
      <div className="flex items-center flex-grow justify-center bg-mainBlue-tertiary text-mainBlue px-2.5 py-2 space-x-2 rounded-xs">
        <Image src="/icon-coins-stacked.svg" alt="B" width={20} height={20} className="fill-mainBlue" />
        <span className="text-sm">Balance: <strong>{user.balance}</strong></span>
      </div>
      <button className="flex items-center flex-grow justify-center bg-mainBlue text-white text-sm lg:ml-auto px-2.5 py-2 space-x-2 rounded-xs">
        <Plus size={20} />
        <strong>Add Credit</strong>
      </button>
    </div>
  );
};

export default BalanceCard;