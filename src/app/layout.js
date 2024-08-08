import CommonLayout from '@/components/client-view/common-layout'
import './globals.css'
import { Inter } from 'next/font/google'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PortfolioPro',
  description: 'Know more about my stuff here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="dark" />
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
