"use client";

import { DataProvider } from './DataContext';

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <DataProvider>{children}</DataProvider>;
}