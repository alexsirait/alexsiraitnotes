import Layout from "../components/Layout";

export default function Profile() {
  return (
    <Layout title='Halo, Saya Alex!'>
      <div className="flex items-center justify-center">
          <div className="mr-3 mb-5 w-12 h-12 border-2 border-t-gray-900 border-r-sky-500 border-l-sky-500 border-b-gray-900 shadows shadow-sky-500/20 bg-contain rounded-full bg-[url(https://media-exp1.licdn.com/dms/image/C4D03AQGAezA47Gexhw/profile-displayphoto-shrink_800_800/0/1654084452104?e=1659571200&v=beta&t=1ddV5fLrSucG02MRcLGfUj581sbO4_RU-WoEgpJ_YcQ)]"></div>
          <h1 className='text-white text-2xl font-semibold tracking-tighter mb-5'>Alex Sirait</h1>
        </div>
      <div className="text-white leading-loose text-md md:text-lg">
        <p className="mb-5">I am a Creative Full-Stack Web Developer and an Informatics Engineering Student, who loves building things, solve problems and learn new things.</p>
        <p className="mb-5">I studied programming in depth, it&apos;s been more than 3+ years. I studied in depth PHP and JavaScript, especially Laravel for Back end and React for Front End, from the fundamentals to something advanced. I also learned everything from how to write clean code to How to make tests with TDD. Currently in my project web development I develop with PHP and Laravel for the back end, then React, Next.js for the front end and Tailwind CSS and Bootstrap for the web styling.</p>
        <p className="mb-5">I loves building things, solve problems and learn new things. 🚀</p>
      </div>
    </Layout>
  )
}
