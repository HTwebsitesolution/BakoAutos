import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Bako Autos Ltd – Mobile Mechanic South London',
  description: 'Professional mobile mechanic servicing and repairs for all cars and vans. Covering 15-mile radius from SE24. Call 07999 180165.',
  keywords: 'mobile mechanic, south london, car repairs, van servicing, SE24, Herne Hill, Brixton',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
