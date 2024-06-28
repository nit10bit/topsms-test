"use client";

import { useState } from 'react';
import Logo from '@/components/Logo';
import TrialMessage from '@/components/TrialMessage';
import BalanceCard from '@/components/CurrentBalance';
import AccountMenu from '@/components/AccountMenu';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className="flex justify-start items-center bg-white py-2.5 m-2.5 px-4 border border-border rounded-sm">
      <Logo />
      <div className="hidden xl:flex items-center space-x-4">
        <TrialMessage />
        <BalanceCard />
        <span className="text-gray-200 mx-6">|</span>
        <AccountMenu />
      </div>
      <div className="xl:hidden flex items-center ml-auto">
        <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
          <Menu size={24} />
        </button>
      </div>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent className="bg-white h-5/6">
          <div className="flex flex-col space-y-4 p-4">
            <TrialMessage />
            <AccountMenu />
            <BalanceCard />
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
