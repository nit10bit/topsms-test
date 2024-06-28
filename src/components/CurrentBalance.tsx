import { FC } from 'react';
import { useData } from '@/context/DataContext';
import {
  Plus,
  Coins
} from "lucide-react"

const BalanceCard: FC = () => {
  const { user } = useData();

  return (
    <div className="flex flex-column justify-center gap-4 lg:flex-row items-center md:gap-2">
      <div className="flex items-center flex-grow justify-center bg-limeGreen-light px-2.5 py-2 space-x-2 rounded-xs">
        <Coins size={20} />
        <span className="text-sm">Balance: <strong>{user.balance}</strong></span>
      </div>
      <button className="flex items-center flex-grow justify-center bg-limeGreen text-sm lg:ml-auto px-2.5 py-2 space-x-2 rounded-xs">
        <Plus size={20} />
        <strong>Add Credit</strong>
      </button>
    </div>
  );
};

export default BalanceCard;