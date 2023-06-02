import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs News App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <NextTopLoader />
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
