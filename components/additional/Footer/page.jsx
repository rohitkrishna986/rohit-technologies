
import { FaInstagram, FaLinkedin, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    <div className=' w-full h-[150px] bg-black transition-all text-white flex justify-center border border-t border-white/20'>
      <div className='container w-[50%] h-full flex flex-col items-center'>
        <div className='mt-4'>
            <Link href={'/'}>
                <Image src="/assets/Header/Logo-Header.png" width={80} height={80} alt='Logo'/>
            </Link>
        </div>
        <div className='mt-4'>
          <ul className='flex gap-5 text-[10px] text-gray-300 pl-2 font-medium'>
            <Link href={"/"} className='hover:text-white cursor-pointer'>ABOUT</Link>
            <Link href={"/"} className='hover:text-white cursor-pointer'>PROJECT</Link>
            <Link href={"/"} className='hover:text-white cursor-pointer'>CONTACT</Link>
          </ul>
        </div>
        <div className='text-md flex gap-4 mt-4'>
            <a href="https://www.instagram.com/__rzhi__/" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaInstagram/></a>
            <a href="https://wa.me/919597835933" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaWhatsapp/></a>
            <a href="https://www.linkedin.com/in/rohitkrishna-s/" target="_blank" className='cursor-pointer hover:bg-white hover:text-black p-1 rounded-lg'><FaLinkedin/></a>
        </div>
        <div>
          <p className='flex items-center text-xs gap-2 mt-4'><span className='text-xs'><FaRegCopyright/></span>All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer