"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  BellRing,
  ChevronDown,
  ChevronRight,
  FileLineChart,
  List,
  MousePointerClick
} from 'lucide-react';

interface MainSideMenuProps {
  collapsed: boolean;
}

const MainSideMenu: React.FC<MainSideMenuProps> = ({ collapsed }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.style.maxHeight = dropdownOpen
        ? `${dropdownRef.current.scrollHeight}px`
        : '0px';
    }
  }, [dropdownOpen]);

  useEffect(() => {
    if (collapsed) {
      setDropdownOpen(false);
    }
  }, [collapsed]);

  return (
    <div className="flex flex-col bg-white text-black">
      <nav className="flex flex-col mt-2 space-y-2">
        <Link href="/" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <BarChart3 size={24} className="flex-shrink-0" />
          Dashboard
        </Link>
        <div>
          <button
            onClick={handleToggleDropdown}
            className={`flex justify-start items-center w-full gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 ${dropdownOpen ? 'bg-gray-100' : ''} transition duration-200 whitespace-nowrap overflow-hidden`}
          >
            <MousePointerClick size={24} className="flex-shrink-0" />
            Campaigns
            {dropdownOpen ? <ChevronDown className="ml-auto" /> : <ChevronRight className="ml-auto" />}
          </button>
          <div
            ref={dropdownRef}
            className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
          >
            <div className="flex flex-col space-y-1 mt-2 pl-4">
              <Link href="#" className="py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black hover:font-medium transition duration-200">
                Lorem Ipsum
              </Link>
              <Link href="#" className="py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black hover:font-medium transition duration-200">
                Lorem Ipsum
              </Link>
              <Link href="#" className="py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black hover:font-medium transition duration-200">
                Lorem Ipsum
              </Link>
              <Link href="#" className="py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black hover:font-medium transition duration-200">
                Lorem Ipsum
              </Link>
            </div>
          </div>
        </div>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
            <List size={24} className="flex-shrink-0" />
            Contacts
        </Link>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
            <FileLineChart size={24} className="flex-shrink-0" />
            Reports
        </Link>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <BellRing size={24} className="flex-shrink-0" />
          Notifications
        </Link>
      </nav>
    </div>
  );
};

export default MainSideMenu;
