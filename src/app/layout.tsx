import { GlobalContextProvider } from "../Context/store"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
        {children}
        </GlobalContextProvider> 
      </body>
    </html>
  )
}