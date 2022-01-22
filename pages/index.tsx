import Head from 'next/head'

import Sidebar from "../components/Sidebar/Sidebar"
import Center from "../components/Center/Center"


export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify Clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='flex'>
          <Sidebar />     
          <Center />  
      </main>
      <div></div>
    </div>
  )
}
