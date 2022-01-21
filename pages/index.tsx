import Head from 'next/head'

import Sidebar from "../components/Sidebar/Sidebar"
export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
          <Sidebar />       
      </main>
      <div></div>
    </div>
  )
}
