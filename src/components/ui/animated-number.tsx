import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
}

const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const end = value;
    const increment = end / (duration / 16.67); // Aproximadamente 60fps

    const animate = () => {
      start += increment;
      if (start < end) {
        setDisplayValue(Math.round(start));
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
      }
    };

    animate();
  }, [value]);

  return <>{formatNumberWithCommas(displayValue)}</>;
};

export default AnimatedNumber;
