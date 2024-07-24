"use client";

import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from '@/components/ui/select';
import StatsTooltip from '@/components/charts/StatsTooltip';
import StatsLegend from '@/components/charts/StatsLegend';
import { useData } from '@/context/DataContext';
import resolveConfig from 'tailwindcss/resolveConfig';
import config from '@root/tailwind.config';

const tailwind = resolveConfig(config);
const colorInfo1 = tailwind.theme.colors.mainBlue.DEFAULT
const colorInfo2 = tailwind.theme.colors.mainBlue.secondary
const colorInfo3 = tailwind.theme.colors.mainBlue.tertiary

const StatsChart = () => {
  const { accountData } = useData();
  const [filter, setFilter] = useState('day');
  const [chartData, setChartData] = useState(accountData.dayData);

  const handleFilterChange = (value: string) => {
    setFilter(value);
    switch (value) {
      case 'day':
        setChartData(accountData.dayData);
        break;
      case 'week':
        setChartData(accountData.weekData);
        break;
      case 'month':
        setChartData(accountData.monthData);
        break;
      default:
        setChartData(accountData.dayData);
        break;
    }
  };

  return (
    <div className="w-full flex flex-col relative p-5">
      <div className="w-full flex flex-row items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Stats</h3>
        <Select onValueChange={handleFilterChange} value={filter}>
          <SelectTrigger className="w-40 px-4 py-2 text-sm text-black font-medium bg-white rounded-xs">
            <span>Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by</SelectLabel>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%">
          <BarChart data={chartData} barSize={35}>
            <CartesianGrid vertical={false} stroke="#cecece" strokeWidth={1}  strokeDasharray="10 6" />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="sms" stackId="a" fill={colorInfo1} />
            <Bar dataKey="subscribe" stackId="a" fill={colorInfo2} />
            <Bar dataKey="unsubscribe" stackId="a" fill={colorInfo3} radius={[6, 6, 0, 0]} />
            <Tooltip content={<StatsTooltip />} cursor={{ fill: 'rgba(0,0,0,.05)' }} />
            <Legend content={<StatsLegend />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsChart;
