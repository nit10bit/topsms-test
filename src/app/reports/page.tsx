"use client";

import CardMostBrowserUsed from '@/components/CardMostBrowserUsed';
import CardMostUserLocation from '@/components/CardMostUserLocation';
import CardTopCampaigns from '@/components/CardTopCampaigns';
import ClicksChart from '@/components/charts/clicks/Clicks';
import CompanyRetentionChart from '@/components/charts/company-retention/CompanyRetention';
import SmsSentChart from '@/components/charts/sms/Sent';

const Dashboard = () => {

  return (
    <>
      <h1 className="font-bold text-black text-4xl">Reports</h1>
      <div className='max-w-full grid grid-cols-1 md:grid-cols-3 align-top justify-start w-full pb-2 mt-6 gap-3.5 overflow-x-auto lg:overflow-x-hidden'>
        <CardMostBrowserUsed />
        <CardMostUserLocation />
        <CardTopCampaigns />
      </div>
      <div className='max-w-full grid grid-cols-1 md:grid-cols-3 align-top justify-start w-full pb-2 mt-6 gap-3.5 overflow-x-auto lg:overflow-x-hidden'>
        <SmsSentChart />
        <ClicksChart />
        <CompanyRetentionChart />
      </div>
    </>
  );
};

export default Dashboard;