import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-shrink-0 items-center space-x-2 md:mr-auto">
      <Image src="/topsms-logo.svg" alt="TopSMS" width={127} height={35} />
    </Link>
  );
};

export default Logo;