import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  BadgeCheck,
  CreditCard,
  Bell,
  LogOut,
  ChevronDown
} from "lucide-react"
import { FC } from "react";
import Image from 'next/image';
import { useData } from '@/context/DataContext';

const AccountMenu: FC = () => {
  const { user } = useData();
  return(
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full md:w-auto flex flex-row items-center gap-x-2.5 cursor-pointer">
        <Image src="/avatar_base.jpg" alt={user.initials} width={33} height={33} className="rounded-xs" />
        <span className="font-medium text-gray-800">{user.fname} {user.lname}</span>
        <ChevronDown size={20} className="ml-auto md:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mt-2 rounded-xs">
        <DropdownMenuItem className="text-black font-medium rounded-xs gap-x-2 cursor-pointer">
          <BadgeCheck size={20} className="text-gray-400" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem className="text-black font-medium rounded-xs gap-x-2 cursor-pointer">
          <CreditCard size={20} className="text-gray-400" />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem className="text-black font-medium rounded-xs gap-x-2 cursor-pointer">
          <Bell size={20} className="text-gray-400" />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-black font-medium rounded-xs gap-x-2 cursor-pointer">
          <LogOut size={20} className="text-gray-400" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountMenu;