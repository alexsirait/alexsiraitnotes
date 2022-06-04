import Link from 'next/link'
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
        <div className="mt-5 flex flex-col items-center justify-center border p-4 border-gray-800 rounded-2xl text-white">
            <div className='block mb-5 tracking-tighter'>Copyright &copy; 2022</div>
            <div>Design by <span className='font-semibold'>Alex</span></div>
        </div>
    </>
  )
}