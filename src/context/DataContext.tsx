import React, {
  createContext,
  useContext,
  ReactNode
} from 'react';

interface User {
  username: string;
  fname: string;
  lname: string;
  email: string;
  avatar: string;
  registrationDate: string;
  isTrial: boolean;
  balance: number;
  initials: string;
}

interface SubscriptionData {
  date: string;
  count: number;
}

interface RecentUser {
  username: string;
  email: string;
  registrationDate: string;
}

interface AccountData {
  totalSubscribers: number;
  totalSubscribersLastMonth: number;
  smsSent: number;
  smsSentLastMonth: number;
  totalUnsubscribers: number;
  totalUnsubscribersLastMonth: number;
  totalClicks: number;
  totalClicksLastMonth: number;
  subscriptionsByDay: SubscriptionData[];
  recentUsers: RecentUser[];
  dayData: any[];
  weekData: any[];
  monthData: any[];
}

interface DataContextType {
  user: User;
  accountData: AccountData;
}

const mockData: DataContextType = {
  user: {
    username: "apratama",
    fname: "Ahsan",
    lname: "Pratama",
    email: "apratama@email.com",
    avatar: "/images/avatar.jpg",
    registrationDate: "2024-06-26",
    isTrial: true,
    balance: 850,
    initials: "AP",
  },
  accountData: {
    totalSubscribers: 5268,
    totalSubscribersLastMonth: 5000,
    smsSent: 16789,
    smsSentLastMonth: 16000,
    totalUnsubscribers: 276,
    totalUnsubscribersLastMonth: 282,
    totalClicks: 700,
    totalClicksLastMonth: 485,
    subscriptionsByDay: [
      { date: '2024-05-27', count: 150 },
      { date: '2024-05-28', count: 160 },
      { date: '2024-05-29', count: 170 },
      { date: '2024-05-30', count: 180 },
      { date: '2024-05-31', count: 190 },
      { date: '2024-06-01', count: 200 },
      { date: '2024-06-02', count: 210 },
      { date: '2024-06-03', count: 220 },
      { date: '2024-06-04', count: 230 },
      { date: '2024-06-05', count: 240 },
      { date: '2024-06-06', count: 250 },
      { date: '2024-06-07', count: 260 },
      { date: '2024-06-08', count: 270 },
      { date: '2024-06-09', count: 280 },
      { date: '2024-06-10', count: 290 },
      { date: '2024-06-11', count: 300 },
      { date: '2024-06-12', count: 310 },
      { date: '2024-06-13', count: 320 },
      { date: '2024-06-14', count: 330 },
      { date: '2024-06-15', count: 340 },
      { date: '2024-06-16', count: 350 },
      { date: '2024-06-17', count: 360 },
      { date: '2024-06-18', count: 370 },
      { date: '2024-06-19', count: 380 },
      { date: '2024-06-20', count: 390 },
      { date: '2024-06-21', count: 400 },
      { date: '2024-06-22', count: 410 },
      { date: '2024-06-23', count: 420 },
      { date: '2024-06-24', count: 430 },
      { date: '2024-06-25', count: 436 },
    ],
    recentUsers: [
      { username: 'user1', email: 'user1@email.com', registrationDate: '2024-06-28T01:53:38Z' },
      { username: 'user2', email: 'user2@email.com', registrationDate: '2024-06-28T00:56:37Z' },
      { username: 'user3', email: 'user3@email.com', registrationDate: '2024-06-27T19:06:30Z' },
      { username: 'user4', email: 'user4@email.com', registrationDate: '2024-06-27T15:16:00Z' },
      { username: 'user5', email: 'user5@email.com', registrationDate: '2024-06-26T20:00:00Z' },
      { username: 'user6', email: 'user6@email.com', registrationDate: '2024-06-25T10:00:00Z' },
      { username: 'user7', email: 'user7@email.com', registrationDate: '2024-06-24T12:00:00Z' },
      { username: 'user8', email: 'user8@email.com', registrationDate: '2024-06-23T14:00:00Z' },
      { username: 'user9', email: 'user9@email.com', registrationDate: '2024-06-22T16:00:00Z' },
      { username: 'user10', email: 'user10@email.com', registrationDate: '2024-06-16T18:00:00Z' },
    ],
    dayData: [
      { name: '12am', sms: 100, subscribe: 50, unsubscribe: 20 },
      { name: '3am', sms: 130, subscribe: 65, unsubscribe: 26 },
      { name: '6am', sms: 160, subscribe: 80, unsubscribe: 32 },
      { name: '9am', sms: 190, subscribe: 95, unsubscribe: 38 },
      { name: '12pm', sms: 220, subscribe: 110, unsubscribe: 44 },
      { name: '3pm', sms: 250, subscribe: 125, unsubscribe: 50 },
      { name: '6pm', sms: 280, subscribe: 140, unsubscribe: 56 },
      { name: '9pm', sms: 310, subscribe: 155, unsubscribe: 62 },
    ],
    weekData: [
      { name: 'Mon', sms: 18789, subscribe: 4068, unsubscribe: 1000 },
      { name: 'Tue', sms: 13789, subscribe: 4368, unsubscribe: 1300 },
      { name: 'Wed', sms: 19789, subscribe: 4568, unsubscribe: 900 },
      { name: 'Thu', sms: 15789, subscribe: 4668, unsubscribe: 1800 },
      { name: 'Fri', sms: 12789, subscribe: 4868, unsubscribe: 1150 },
      { name: 'Sat', sms: 14789, subscribe: 5068, unsubscribe: 300 },
      { name: 'Sun', sms: 16789, subscribe: 5268, unsubscribe: 1800 },
    ],
    monthData: [
      { name: 'Week 1', sms: 50000, subscribe: 20000, unsubscribe: 5000 },
      { name: 'Week 2', sms: 60000, subscribe: 21000, unsubscribe: 4000 },
      { name: 'Week 3', sms: 55000, subscribe: 22000, unsubscribe: 3000 },
      { name: 'Week 4', sms: 70000, subscribe: 23000, unsubscribe: 2000 },
    ],
  },
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DataContext.Provider value={mockData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
