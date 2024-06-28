"use client";

import {
  Send,
  ChevronLeft,
  ChevronRight,
  Menu,
  BarChart3,
  MousePointerClick,
  List,
  FileLineChart,
  BellRing,
  Phone,
  Mail,
  MessageCircleQuestion,
  Settings
} from 'lucide-react';
import { useState } from 'react';
import MainSideMenu from '@/components/MainSideMenu';
import SettingsSideMenu from '@/components/SettingsSideMenu';
import { Drawer, DrawerContent } from '@/components/ui/drawer';

const MainSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  };

  const handleExpand = () => {
    if (collapsed) {
      setCollapsed(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div
        className={`hidden xl:flex relative h-full ${collapsed ? 'w-16 md:w-24' : 'w-3/12'} border border-border-light rounded-sm transition-width duration-500`}
        onClick={handleExpand}
      >
        <div className={`w-full flex flex-col p-2 xl:p-6 bg-white text-black rounded-sm overflow-hidden`}>
          {!collapsed ? (
            <button className="flex justify-center items-center gap-x-2.5 bg-limeGreen text-sm font-medium p-2.5 rounded-xs whitespace-nowrap overflow-hidden">
              <Send size={20} className="flex-shrink-0" />
              Send SMS
            </button>
          ) : (
            <button className="flex justify-center items-center gap-x-2.5 bg-limeGreen text-sm font-medium p-2.5 rounded-xs">
              <Send size={20} />
            </button>
          )}
          <MainSideMenu collapsed={collapsed} />
          <SettingsSideMenu collapsed={collapsed} />
        </div>
        <button
          onClick={handleToggle}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full border border-light shadow-lg focus:outline-none translate-x-1/2"
        >
          {collapsed ? <ChevronRight size={12} color="#000" /> : <ChevronLeft size={12} color="#000" />}
        </button>
      </div>
      
      <div className="flex flex-col xl:hidden w-16 p-2 gap-3 items-center bg-white border border-border-light rounded-xs transition-width duration-500" onClick={toggleDrawer}>
        <button className="flex justify-center items-center gap-x-2.5 bg-limeGreen text-sm font-medium p-2.5 rounded-xs">
          <Send size={20} />
        </button>
        <BarChart3 size={24} className="flex-shrink-0" />
        <MousePointerClick size={24} className="flex-shrink-0" />
        <List size={24} className="flex-shrink-0" />
        <FileLineChart size={24} className="flex-shrink-0" />
        <BellRing size={24} className="flex-shrink-0" />
        <Drawer open={isDrawerOpen} onClose={closeDrawer} direction="left">
          <DrawerContent className="bg-white h-5/6">
            <div className={`w-full h-full flex flex-col p-2 xl:p-6 bg-white text-black rounded-sm overflow-hidden`}>
              <button className="flex justify-center items-center gap-x-2.5 bg-limeGreen text-sm font-medium p-2.5 rounded-xs">
                <Send size={20} />
              </button>
              <MainSideMenu collapsed={false} />
              <SettingsSideMenu collapsed={false} />
            </div>
          </DrawerContent>
        </Drawer>
        <div className="flex flex-col gap-3 mt-auto">
          <MessageCircleQuestion size={24} />
          <Settings size={24} />
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
