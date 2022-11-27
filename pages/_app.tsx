import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider session={pageProps.session} >
          <RecoilRoot>
                <Component {...pageProps} />
          </RecoilRoot>
      </SessionProvider>
  )
}

