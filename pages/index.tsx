import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import Feed from '../components/feed/Feed'
import ModalUpload from '../components/modals/ModalUpload'
import { useSession } from "next-auth/react"
import {useRouter} from "next/router";
import {useEffect} from "react";

const Home: NextPage = () : any => {

    const router = useRouter()
    const { data: session } = useSession()

   useEffect((): any => {
       // if (!session) { router.push('/auth/signin') }
   },[session])

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hiden ">
      <Head>
        <title>Instagram next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Header*/}
        <Header/>

        {/*Feed*/}
        <Feed/>

        {/*Modal*/}
        <ModalUpload />
    </div>
  )
}

export default Home
