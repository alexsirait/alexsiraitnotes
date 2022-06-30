import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title='Halo, Saya Alex!'>
      <div className="border-4 border-t-gray-900 border-r-sky-500 border-l-sky-500 border-b-gray-900">
        <div className="mb-5 w-32 h-32 shadows shadow-sky-500/20 bg-contain mx-auto p-1 rounded-full bg-[url(https://media-exp1.licdn.com/dms/image/C4D03AQGAezA47Gexhw/profile-displayphoto-shrink_800_800/0/1654084452104?e=1659571200&v=beta&t=1ddV5fLrSucG02MRcLGfUj581sbO4_RU-WoEgpJ_YcQ)]"></div>
      </div>
      <h1 className='text-white text-2xl font-semibold tracking-tighter mb-5'>Alex Sirait</h1>
      <div className="text-white leading-loose text-md md:text-lg">
        <p className="mb-5">I am a <span className="underline underline-offset-1 decoration-dotted">Creative Full-Stack Web Developer</span> and an Informatics Engineering Student, who loves building things, solve problems and learn new things. 🚀</p>
        <a
              className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
              href="https://drive.google.com/file/d/1cyT2XgHUrpaukY9Hzs34vpTZ0EJl6O3c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
          >
              Download CV Here
        </a>
        <p className='mt-5'>
            Lets see me in full on {' '}
            <a
                className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                href="https://www.linkedin.com/in/alex-sirait-6b696b221/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
        </p>
        <p>
            and Let&apos;s talk over on {' '}
            <a
                className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                href="https://twitter.com/alexsrait"
                target="_blank"
                rel="noopener noreferrer"
            >
                Twitter
            </a>{' '}
            or{' '}
            <a
                className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                href="https://instagram.com/alexsrait"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
            .
        </p>
      </div>
    </Layout>
  )
}
