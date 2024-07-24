import Image from 'next/image';

const mostUserLocation = [
  { location: 'Sydney', value: '15.4K' },
  { location: 'Melbourne', value: '15.4K' },
  { location: 'Gold Coast', value: '15.4K' },
  { location: 'Brisbane', value: '15.4K' },
  { location: 'Newcastle', value: '10.2K' }
];

const getIcon = (browser: string) => {
  switch (browser) {
    case 'Sydney':
      return '/icon-sydney.svg';
    case 'Melbourne':
      return '/icon-melbourne.svg';
    case 'Brisbane':
      return '/icon-brisbane.svg';
    case 'Gold Coast':
      return '/icon-gold-coast.svg';
    case 'Newcastle':
      return '/icon-newcastle.svg';
    default:
      return '/icon-generic-browser.svg';
  }
};

const CardUserLocation = () => {
  return (
    <div className="bg-white p-4 border border-border rounded-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-black font-bold text-xl">Most User Location</h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-black font-medium text-5xl">
          Top 5
        </span>
      </div>
      <ul className="flex flex-col align-center grow gap-4 mt-6">
        {mostUserLocation.map((item, index) => (
          <li key={index} className="flex flex-row grow items-center justify-between">
            <span className="flex flex-row items-center gap-2.5 text-sm leading-none font-medium text-gray-500">
              <Image src={getIcon(item.location)} alt={item.location} width={24} height={24} />
              {item.location}
            </span>
            <span className="text-black font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardUserLocation;