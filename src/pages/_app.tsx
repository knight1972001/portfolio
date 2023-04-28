import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar  from './components/Navbar/Navbar'
import SwitchMode from './components/toggle/switchDarkMode'
import { ThemeProvider, useTheme } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div>
        <Navbar />
        <Component {...pageProps} />
        {/* <Navbar /> */}
      </div>
    </ThemeProvider>
  )
}
