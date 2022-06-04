import Image from "next/image";
import Layout from "../components/Layout";
import cvAlex from '../public/CV_ALEX_SIRAIT.jpg';

export default function cv() {
  return (
    <Layout title='Halo, Saya Alex!'>
      <div className="flex flex-col items-center justify-center">
          <h1 className='text-white text-2xl font-semibold tracking-tighter'>
            Curriculum Vitae
          </h1>
          <a
              className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1 mb-5"
              href="https://drive.google.com/file/d/1cyT2XgHUrpaukY9Hzs34vpTZ0EJl6O3c/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
          >
              Download CV Here
          </a>
    </div>
      <div className="text-white leading-loose text-md md:text-lg">
        <Image src={cvAlex} alt='alex-cv' />
      </div>
    </Layout>
  )
}
