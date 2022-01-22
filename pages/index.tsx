import Head from 'next/head'

import Sidebar from "../components/Sidebar/Sidebar"
import Center from "../components/Center/Center"
import { getSession, GetSessionParams } from 'next-auth/react'


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
  );
}

export async function getServerSideProps(context: GetSessionParams | undefined){
  const session = await getSession(context)
return {
  props:{
    session,
  }
}
}
