import React from 'react';
import { useData } from '@/context/DataContext';
import Image from 'next/image';
import { formatRegistrationDate } from '@/utils/formatRegistrationDate';

const RecentUsersList = () => {
  const { accountData } = useData();
  const { recentUsers } = accountData;

  return (
    <div className="overflow-y-auto p-4 bg-white rounded-sm">
      <h2 className="text-lg font-medium mb-4">Recent Users</h2>
      <ul className="space-y-6">
        {recentUsers.map((user) => (
          <li key={user.username} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/avatar_base.jpg" alt={user.username} width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-medium text-gray-900">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
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