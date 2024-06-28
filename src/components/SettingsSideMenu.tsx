"use client";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import {
  Mail,
  MessageCircleQuestion,
  Phone,
  Settings
} from 'lucide-react';

interface SettingsSideMenuProps {
  collapsed: boolean;
}

const SettingsSideMenu: React.FC<SettingsSideMenuProps> = ({ collapsed }) => {
  return (
    <div className="flex flex-col bg-white text-black mt-auto">
      <DropdownMenuSeparator />
      {!collapsed && ( <span className="text-xs text-gray-500 mt-3 mb-4 px-3">SETTINGS</span> ) }
      <nav className="flex flex-col mt-2 space-y-2">
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <MessageCircleQuestion size={24} className="flex-shrink-0" />
          Help
        </Link>
        <Link href="#" className={`flex justify-start items-center gap-5 ${collapsed ? 'p-2.5' : 'py-2.5 px-5'} font-medium text-sm text-black rounded hover:bg-gray-100 transition duration-200 whitespace-nowrap overflow-hidden`}>
          <Settings size={24} className="flex-shrink-0" />
          Settings
        </Link>
      </nav>
      <div className={`flex flex-col justify-start ${!collapsed ? 'gap-1 mt-2 py-2.5 px-6 border border-border' : 'p-2.5 gap-6'} font-medium text-sm text-black rounded-sm`}>
        {!collapsed ? (
          <Link href="mailto:support@topsms.com.au" target="_blank" title="Send us an email" className="whitespace-nowrap overflow-hidden">Support@topsms.com.au</Link>
        ) : (
          <Phone size={20} />
        )}
        {!collapsed ? (
          <Link href="phone:+610291216234" target="_blank" title="Call us for support" className="whitespace-nowrap overflow-hidden">Phone: +61 (0) 2 9121 6234</Link>
        ) : (
          <Mail size={20} />
        )}
      </div>
    </div>
  );
};

export default SettingsSideMenu;
