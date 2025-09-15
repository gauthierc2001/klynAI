import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Klyn Robotics - Accelerating Embodied Intelligence</title>
        <meta name="description" content="Klyn Robotics builds the future of robotics coordination and training through decentralized platforms and on-chain incentives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <meta property="og:title" content="Klyn Robotics - Accelerating Embodied Intelligence" />
        <meta property="og:description" content="Klyn Robotics builds the future of robotics coordination and training through decentralized platforms and on-chain incentives." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Klyn Robotics - Accelerating Embodied Intelligence" />
        <meta name="twitter:description" content="Klyn Robotics builds the future of robotics coordination and training through decentralized platforms and on-chain incentives." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
