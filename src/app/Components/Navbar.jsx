import React from 'react';
import Link from 'next/link';
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="relative flex lg:px-20 px-4 py-4 bg-slate-900 text-white items-center justify-between">
      <Link href='/'>
      <div className='logo'>
        e-Wheels 
      </div>
      </Link>
        <ul className="hidden lg:flex items-center justify-between gap-8">
        <li>Home</li>
        <li>Models</li>
        <li>Stores</li>
        <li>Services</li>
        </ul>
        <ul className="hidden lg:flex items-center justify-between gap-8">
        <li><IoMdSearch/></li>
        <li><FiShoppingCart/></li>
        <li><FaRegUser/></li>
        </ul>

      <div className="text-black flex lg:hidden justify-center left-0 items-center flex-col absolute top-0 h-screen w-screen bg-slate-900 z-10">
        <div className=" text-black flex flex-col items-center justify-between gap-8">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>Models</Link>
        <Link href={'/'}>Stores</Link>
        <Link href={'/'}>Services</Link>
        </div>
        <ul className=" text-black flex items-center justify-between gap-8">
        <li><IoMdSearch/></li>
        <li><FiShoppingCart/></li>
        <li><FaRegUser/></li>
        </ul>

      </div>
    </nav>
  )
}
export default Navbar; 