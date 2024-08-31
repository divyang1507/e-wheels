import React from "react";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiAlignJustify,
} from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="flex lg:px-20 px-4 py-6 bg-dark text-white items-center justify-between z-20">
      <Link className="z-20" href="/">
        <div className="logo text-primary text-3xl">e-Wheels</div>
      </Link>
      <div className="hidden lg:flex items-center justify-between gap-8 text-xl">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Models</Link>
        <Link href={"/"}>Stores</Link>
        <Link href={"/"}>Services</Link>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-8 text-xl">
        <Link href={"/"}>
          <FiSearch />
        </Link>
        <Link href={"/"}>
          <FiShoppingCart />
        </Link>
        <Link href={"/"}>
          <FiUser />
        </Link>
      </div>
      <div className="lg:hidden relative flex items-center justify-center text-2xl z-20">
        <FiAlignJustify />
      </div>
      <div className="flex flex-col text-xl bg-dark lg:hidden justify-center left-0 items-center gap-10  z-10 absolute top-0 h-screen w-screen  ">

          <Link className="text-white" href={"/"}>Home</Link>
          <Link className="text-white" href={"/"}>Models</Link>
          <Link className="text-white" href={"/"}>Stores</Link>
  
        <div className=" text-white  flex lg:hidden  items-center justify-between gap-8">
          <Link href={"/"}>
            <FiSearch />
          </Link>
          <Link href={"/"}>
            <FiShoppingCart />
          </Link>
          <Link href={"/"}>
            <FiUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
