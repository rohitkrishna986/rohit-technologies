import Link from 'next/link';

const MobileSidebar = ({ onClose }) => {
  return (
    <div className='bg-[#121212] max-h-fit text-white fixed top-20 bottom-0 right-0 left-0 w-full z-10 rounded-md shadow-md'>
      <div className='p-4 my-5 flex flex-col gap-5 text-[18px] font-light'>
        <Link href="/" onClick={onClose}>Home</Link>
        <Link href="/services" onClick={onClose}>Services</Link>
        <Link href="/" onClick={onClose}>About Us</Link>
        <Link href="/" onClick={onClose}>Contact Us</Link>
        <Link href="/" onClick={onClose}>Blog</Link>
      </div>
    </div>
  );
}

export default MobileSidebar;
