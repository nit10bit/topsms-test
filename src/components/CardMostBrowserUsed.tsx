import AnimatedNumber from '@/components/ui/animated-number';
import Image from 'next/image';

const mostBrowserUsed = [
  { browser: 'Chrome', value: '15.4K' },
  { browser: 'Safari', value: '15.4K' },
  { browser: 'Firefox', value: '15.4K' },
  { browser: 'Edge', value: '15.4K' },
  { browser: 'Other', value: '10.2K' }
];

const getIcon = (browser: string) => {
  switch (browser) {
    case 'Chrome':
      return '/icon-chrome.svg';
    case 'Safari':
      return '/icon-safari.svg';
    case 'Firefox':
      return '/icon-firefox.svg';
    case 'Edge':
      return '/icon-edge.svg';
    default:
      return '/icon-generic-browser.svg';
  }
};

const CardMostBrowserUsed = () => {
  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Most Browser Used</h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-5xl">
          <AnimatedNumber value={40} />%
        </span>
      </div>
      <ul className="flex flex-col align-center grow gap-4 mt-6">
        {mostBrowserUsed.map((item, index) => (
          <li key={index} className="flex flex-row grow items-center justify-between">
            <span className="flex flex-row items-center gap-2.5 text-sm leading-none font-medium text-gray-500">
              <Image src={getIcon(item.browser)} alt={item.browser} width={24} height={24} />
              {item.browser}
            </span>
            <span className="text-black font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardMostBrowserUsed;