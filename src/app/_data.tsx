import type { AppProps } from 'next/app';
import { DataProvider } from '@/context/DataContext';
import './globals.css';

function MockRequest({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MockRequest;