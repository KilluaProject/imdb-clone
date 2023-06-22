import './globals.css'
import { Inter } from 'next/font/google'
import Headers from '@/components/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone UDEMY',
  description: 'This is imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Headers/>
        {children}
        
        
        </body>
    </html>
  )
}
