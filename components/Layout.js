import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href='https://media-exp1.licdn.com/dms/image/C4D03AQGAezA47Gexhw/profile-displayphoto-shrink_800_800/0/1654084452104?e=1659571200&v=beta&t=1ddV5fLrSucG02MRcLGfUj581sbO4_RU-WoEgpJ_YcQ' />
        </Head>
        <div className="bg-[#111827]">
          <div className="max-w-3xl mx-auto flex flex-col py-2 md:py-28 text-center min-h-screen px-4">
            <Navbar/>
            <div className="border p-4 border-gray-800 rounded-2xl">
              {children}
            </div>
            <Footer/>
          </div>
        </div>
    </>
  )
}
