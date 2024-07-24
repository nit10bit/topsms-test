import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import resolveConfig from 'tailwindcss/resolveConfig';
import config from '@root/tailwind.config';
import AnimatedNumber from '@/components/ui/animated-number';

const CompanyRetentionChart = () => {

  const tailwind = resolveConfig(config);
  const colorInfo1 = tailwind.theme.colors.mainBlue.DEFAULT;
  const colorFill = tailwind.theme.colors.mainBlue.tertiary;
  
  const chartData = [
    { name: 'Mon', value: 3600 },
    { name: 'Tue', value: 3200 },
    { name: 'Wed', value: 3300 },
    { name: 'Thu', value: 1200 },
    { name: 'Fri', value: 5000 },
    { name: 'Sat', value: 3000 },
    { name: 'Sun', value: 4500 },
  ];

  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="w-full flex flex-col items-start justify-between mb-6">
        <h3 className="font-semibold text-lg">Company Retention</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-black font-medium text-5xl">
            <AnimatedNumber value={70} />%
          </span>
        </div>
      </div>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} stroke="#cecece" strokeWidth={1} strokeDasharray="10 6" />
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colorInfo1} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colorInfo1} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis tickCount={6} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke={colorInfo1} strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="value" stroke={colorInfo1} fillOpacity={1} fill={colorFill} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompanyRetentionChart;
