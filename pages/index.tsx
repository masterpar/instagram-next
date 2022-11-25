import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import Feed from '../components/feed/Feed'


const Home: NextPage = () => {
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
    </div>
  )
}

export default Home
