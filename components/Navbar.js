import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
        <div className="mb-5 flex items-center justify-center border p-4 border-gray-800 rounded-2xl">
            <Link href='/' >
              <a className={`mr-1 inline-flex items-center justify-center w-32 text-sm md:text-md font-semibold text-center ${router.pathname == '/' ? 'text-white underline underline-offset-8 decoration-4' : 'text-gray-400'} align-middle transition-all duration-300 ease-in-out bg-transparent cursor-pointer select-none hover:text-white focus:shadow-xs focus:no-underline`}>
                <span className="py-2">Alex</span>
              </a>
            </Link>
            <Link href='/profile'>
              <a className={`mr-1 inline-flex items-center justify-center w-32 text-sm md:text-md font-semibold text-center ${router.pathname == '/profile' ? 'text-white underline underline-offset-8 decoration-4' : 'text-gray-400'} align-middle transition-all duration-300 ease-in-out bg-transparent cursor-pointer select-none hover:text-white focus:shadow-xs focus:no-underline`}>
                <span className="py-2">Profile</span>
              </a>
            </Link>
            <Link href='/cv'>
            <a className={`mr-1 inline-flex items-center justify-center w-32 text-sm md:text-md font-semibold text-center ${router.pathname == '/cv' ? 'text-white underline underline-offset-8 decoration-4' : 'text-gray-400'} align-middle transition-all duration-300 ease-in-out bg-transparent cursor-pointer select-none hover:text-white focus:shadow-xs focus:no-underline`}>
              <span className="py-2">CV</span>
            </a>
            </Link>
            <Link href='/project'>
            <a className={`mr-1 inline-flex items-center justify-center w-32 text-sm md:text-md font-semibold text-center ${router.pathname == '/project' ? 'text-white underline underline-offset-8 decoration-4' : 'text-gray-400'} align-middle transition-all duration-300 ease-in-out bg-transparent cursor-pointer select-none hover:text-white focus:shadow-xs focus:no-underline`}>
              <span className="py-2">Project</span>
            </a>
            </Link>
            <Link href='/contact'>
            <a className={`mr-1 inline-flex items-center justify-center w-32 text-sm md:text-md font-semibold text-center ${router.pathname == '/contact' ? 'text-white underline underline-offset-8 decoration-4' : 'text-gray-400'} align-middle transition-all duration-300 ease-in-out bg-transparent cursor-pointer select-none hover:text-white focus:shadow-xs focus:no-underline`}>
              <span className="py-2">Contact</span>
            </a>
            </Link>
          </div>
    </>
  )
}
