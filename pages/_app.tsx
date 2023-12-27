import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/m.png" />
        <meta
          name="description"
          content="Mustafa Islek's personal website."
        />
        <title>Mustafa Islek</title>
      </Head>

      <Header />

      <main className="py-14">
        <Component {...pageProps} />
        <Analytics />
      </main>
    </Auth0Provider>
  )
}
