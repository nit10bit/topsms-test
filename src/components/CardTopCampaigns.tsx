import AnimatedNumber from '@/components/ui/animated-number';
import Image from 'next/image';

const mostBrowserUsed = [
  { campaign: '3rd Anniversary', value: 20 },
  { campaign: 'Summer Sale 2024', value: 70 },
  { campaign: 'New Product Launch', value: 30 },
  { campaign: 'Holiday Discounts', value: 50 },
  { campaign: 'Flash Sale Weekend ', value: 70 }
];

const CardTopCampaigns = () => {
  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Top Campaigns <small>(avg click rate)</small></h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-5xl">
          <AnimatedNumber value={70} />%
        </span>
      </div>
      <ul className="flex flex-col align-center grow gap-4 mt-6">
        {mostBrowserUsed.map((item, index) => (
          <li key={index} className="flex flex-row grow items-center justify-between">
            <span className="flex flex-row items-center gap-2.5 text-sm leading-none font-medium text-gray-500">
              {item.campaign}
            </span>
            <span className="text-black font-medium"><AnimatedNumber value={item.value} />%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardTopCampaigns;