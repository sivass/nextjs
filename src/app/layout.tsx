import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from './themeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube video time tracker',
  description: 'Easily mange youtube video time tracker which left the previous watch time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-500 `}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <ThemeSwitcher />
              <main>
              {children}
              </main>
          </ThemeProvider>
       </body>
    </html>
  )
}
