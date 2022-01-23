import Head from 'next/head'

import Sidebar from "../components/Sidebar/Sidebar"
import Center from "../components/Center/Center"
import { getSession, GetSessionParams } from 'next-auth/react'
import Player from '../components/Player/Player';


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
      <div className='sticky bottom-0'>
        <Player />
      </div>
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
