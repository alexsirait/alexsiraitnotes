import Image from "next/image";
import Layout from "../components/Layout";
import SS1 from "../public/ss1.PNG";
import SS2 from "../public/ss2.png";
import SS3 from "../public/ss3.PNG";
import SS4 from "../public/ss4.PNG";

export default function cv() {
  return (
    <Layout title='Halo, Saya Alex!'>
      <div className="flex items-center justify-center">
          <h1 className='text-white text-2xl font-semibold tracking-tighter mb-5'>
            Projects
          </h1>
        </div>
      <div className="text-white leading-loose text-md md:text-lg">
        <div className="block text-left">
          <div className="mb-8 flex items-center font-sans font-medium tracking-tighter">Here are some of my favorite projects, which I made myself from scratch. This is not all but this is my favorite project.</div>
          <div className="mb-5 border p-8 rounded-lg block md:flex items-center gap-x-4">
            <div className="md:px-6">
              <Image src={SS1} alt='TracerStudy' width={'420px'} height={'250px'} />
            </div>
            <div>
              <span className="mb-2 block font-semibold text-xl font-sans tracking-tighter">Batam State Polytechnic Alumni Study Tracer Application Web-Based</span>
              <hr />
              <span className="mt-2 block text-md font-mono tracking-tighter">Tech: Laravel, React, Tailwind CSS, Inertia, MySQL, Heroicons</span>
              <span className="block text-md font-mono tracking-tighter">
                <a
                    className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                    href="https://github.com/alexsirait/alumni-study-tracers"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Project
                </a>
              </span>
            </div>
          </div>
          <div className="mb-5 border p-8 rounded-lg block md:flex items-center gap-x-4">
            <div className="md:px-6">
              <Image src={SS2} alt='TracerStudy' width={'500px'} height={'280px'} />
            </div>
            <div>
              <span className="mb-2 block font-semibold text-xl font-sans tracking-tighter">Forum Mother-mother</span>
              <hr />
              <span className="mt-2 block text-md font-mono tracking-tighter">Tech: Laravel, React, Tailwind CSS, TDD, PestPHP, Inertia, MySQL, Heroicons</span>
              <span className="block text-md font-mono tracking-tighter">
                <a
                    className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                    href="https://github.com/alexsirait/Forum_Mother-mother"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Project
                </a>
              </span>
            </div>
          </div>
          <div className="mb-5 border p-8 rounded-lg block md:flex items-center gap-x-4">
            <div className="md:px-6">
              <Image src={SS3} alt='TracerStudy' width={'470px'} height={'250px'} />
            </div>
            <div>
              <span className="mb-2 block font-semibold text-xl font-sans tracking-tighter">Chat-chatan</span>
              <hr />
              <span className="mt-2 block text-md font-mono tracking-tighter">Tech: Laravel, React, Tailwind CSS, Laravel Echo, Pusher, Inertia, MySQL</span>
              <span className="block text-md font-mono tracking-tighter">
                <a
                    className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                    href="https://github.com/alexsirait/Chat-chatan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Project
                </a>
              </span>
            </div>
          </div>
          <div className="mb-5 border p-8 rounded-lg block md:flex items-center gap-x-4">
            <div className="md:px-6">
              <Image src={SS4} alt='TracerStudy' width={'240px'} height={'150px'} />
            </div>
            <div>
              <span className="mb-2 block font-semibold text-xl font-sans tracking-tighter">alexsiraitnotes</span>
              <hr />
              <span className="mt-2 block text-md font-mono tracking-tighter">Tech: Next.js, Tailwind CSS</span>
              <span className="block text-md font-mono tracking-tighter">
                <a
                    className="text-sky-400 hover:text-sky-500 transition-colors duration-500 shadow-undersky underline underline-offset-1"
                    href="https://github.com/alexsirait/alexsiraitnotes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Project
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
