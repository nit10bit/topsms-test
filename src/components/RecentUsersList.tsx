import React from 'react';
import { useData } from '@/context/DataContext';
import Image from 'next/image';
import { formatRegistrationDate } from '@/utils/formatRegistrationDate';

const RecentUsersList = () => {
  const { accountData } = useData();
  const { recentUsers } = accountData;

  return (
    <div className="p-4 bg-white rounded-sm">
      <h2 className="text-lg font-semibold mb-6">Recent Subscribers</h2>
      <ul className="space-y-4 max-h-[400px] overflow-y-auto pl-6 pr-4">
        {recentUsers.map((user) => (
          <li key={user.username} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/avatar_base.jpg" alt={user.username} width={30} height={30} className="rounded-full" />
              <div>
                <p className="text-sm leading-none font-medium text-gray-900">{user.username}</p>
                <p className="text-sm leading-none text-gray-500 mt-1">{user.email}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {formatRegistrationDate(user.registrationDate)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentUsersList;