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
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import Image from 'next/image';

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
    <div className="flex flex-col mt-3.5 bg-white text-black">
      <DropdownMenuSeparator />
      {!collapsed && ( <span className="text-xs text-gray-500 mt-3 mb-4 px-3">SETTINGS</span> ) }
      <nav className="flex flex-col mt-2 space-y-2">
        <Link href="/" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-semibold text-sm text-black rounded bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <BarChart3 size={24} className="flex-shrink-0" />
          Dashboard
        </Link>
        <div>
          <button
            onClick={handleToggleDropdown}
            className={`flex justify-start items-center w-full gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-semibold text-sm text-black rounded hover:bg-gray-100 ${dropdownOpen ? 'bg-gray-100' : ''} transition duration-200 whitespace-nowrap overflow-hidden`}
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
              <Link href="#" className="flex flex-row items-end">
                <Image src="bg-list-junction.svg" alt="|" width={13} height={42} className="flex-shirink-0 mt-[-13px] mb-[14px]" />
                <span className="flex-grow py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black font-medium hover:font-semibold transition duration-200">Lorem Ipsum</span>
              </Link>
              <Link href="#" className="flex flex-row items-end">
                <Image src="bg-list-junction.svg" alt="|" width={13} height={42} className="flex-shirink-0 mt-[-24px] mb-[14px]" />
                <span className="flex-grow py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black font-medium hover:font-semibold transition duration-200">Lorem Ipsum</span>
              </Link>
              <Link href="#" className="flex flex-row items-end">
                <Image src="bg-list-junction.svg" alt="|" width={13} height={42} className="flex-shirink-0 mt-[-24px] mb-[14px]" />
                <span className="flex-grow py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black font-medium hover:font-semibold transition duration-200">Lorem Ipsum</span>
              </Link>
              <Link href="#" className="flex flex-row items-end mb-1">
                <Image src="bg-list-junction.svg" alt="|" width={13} height={42} className="flex-shirink-0 mt-[-24px] mb-[14px]" />
                <span className="flex-grow py-2 px-3 rounded hover:bg-gray-50 text-xs text-gray-500 hover:text-black font-medium hover:font-semibold transition duration-200">Lorem Ipsum</span>
              </Link>
            </div>
          </div>
        </div>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-semibold text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
            <List size={24} className="flex-shrink-0" />
            Contacts
        </Link>
        <Link href="/reports" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-semibold text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
            <FileLineChart size={24} className="flex-shrink-0" />
            Reports
        </Link>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-semibold text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <BellRing size={24} className="flex-shrink-0" />
          Notifications
        </Link>
      </nav>
    </div>
  );
};

export default MainSideMenu;
