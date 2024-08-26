"use client";

import Image from "next/image";
import GetQuoteButton from "../GetQuoteButton";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import MobileSidebar from "../MobileSidebar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed w-full bg-black text-white h-20 z-50">
      <div className="w-full h-full flex justify-between px-8 md:px-28 items-center">
        <div>
          <Image src="/assets/Header/Logo-Header.png" width={90} height={90} alt="logo" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-6 font-light text-sm">
            <li className="hover:font-normal">Home</li>
            <li className="hover:font-normal">Services</li>
            <li className="hover:font-normal">About Us</li>
            <li className="hover:font-normal">Contact Us</li>
            <li className="hover:font-normal">Blog</li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <GetQuoteButton name="Get Quote" />
        </div>
        <div className="md:hidden text-3xl transition-all duration-300">
          {openMenu ? (
            <IoMdClose onClick={() => setOpenMenu(false)} />
          ) : (
            <IoMenu onClick={() => setOpenMenu(true)} />
          )}
        </div>
        {openMenu && <MobileSidebar onClose={() => setOpenMenu(false)} />}
      </div>
    </div>
  );
};

export default Header;
