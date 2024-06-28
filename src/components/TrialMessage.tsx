import { FC } from 'react';
import Link from 'next/link';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useData } from '@/context/DataContext';

const TrialMessage: FC = () => {
    const { user } = useData();
    const [daysLeft, setDaysLeft] = useState(0);
  
    useEffect(() => {
      if (user.isTrial == true) {
        const registrationDate = new Date(user.registrationDate);
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate.getTime() - registrationDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysLeft(14 - diffDays);
      }
    }, [user]);
    return (
      <div className="flex flex-col items-center gap-2 lg:flex-row bg-danger border border-danger-border text-xs text-danger-text font-medium p-2.5 md:ml-3 mr-3 rounded-xs space-x-2">
        <div className="flex flex-row items-center gap-2 lg:flex-row md:items-center md:text-center">
          <AiOutlineInfoCircle className="text-xl" />
          <span>Only {daysLeft} days to use your free trial credit. Top up for full access.</span>
        </div>
        <Link href="/" className="ml-5 text-sm text-danger-text font-semibold underline">
          Top up now
        </Link>
      </div>
    )
}

export default TrialMessage;