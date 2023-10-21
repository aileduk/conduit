import type { Metadata } from 'next'
import { Inter, Titillium_Web } from 'next/font/google'
import './globals.scss'

import Header from '@/components/Header'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })
const titillium = Titillium_Web({ subsets: ['latin'], weight: ['400', '700'], variable: '--titillium' })

export const metadata: Metadata = {
  title: 'Conduit',
  description: 'Conduit Real World'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${titillium.variable}`}>
        <Container>
          <Header />
        </Container>
        {children}
      </body>
    </html>
  )
}
