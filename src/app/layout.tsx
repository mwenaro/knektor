import { GlobalContextProvider } from '@/context/GlobalContext';
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Knektor ",
  description: "Knektor official website",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "180x180",
      url: "/assets/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/logo.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full '>
        
        <GlobalContextProvider>
        {children}
        </GlobalContextProvider>
        </body>
    </html>
  )
}
