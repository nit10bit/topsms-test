"use client";

import CardSmsSent from '@/components/CardSmsSent';
import CardTotalClicks from '@/components/CardTotalClicks';
import CardTotalSubscribersSummary from '@/components/CardTotalSubscribersSummary';
import CardTotalUnsubscribers from '@/components/CardTotalUnsubscribers';
import RecentUsersList from '@/components/RecentUsersList';
import StatsChart from '@/components/charts/stats/Chart';

const Dashboard = () => {

  return (
    <>
      <h1 className="font-bold text-black text-4xl">Dashboard</h1>
      <div className='max-w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 align-top justify-start w-full pb-2 mt-6 gap-3.5 overflow-x-auto lg:overflow-x-hidden'>
        <CardTotalSubscribersSummary />
        <CardSmsSent />
        <CardTotalUnsubscribers />
        <CardTotalClicks />
      </div>
      <div className="w-full flex flex-col xl:flex-row mt-5 gap-5">
        <div className="w-full xl:w-1/2 flex flex-col flex-grow gap-5 bg-white rounded-sm">
          <StatsChart />
        </div>
        <div className="w-full xl:w-1/2 flex flex-col flex-grow gap-5 bg-white rounded-sm">
          <RecentUsersList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;