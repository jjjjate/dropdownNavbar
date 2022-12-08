import React, {useState} from 'react';
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] =useState(false)
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around shadow">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img
              className="md:cursor-pointer h-9"
              src=""
              alt="logo"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${ open ? "close" : "menu" }`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <li>
            <Link
              className="py-7 px-3 inline-block"
              to="/about"
            >
              about
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        <ul className={`
        md:hidden bg-white absolute w-full h-full
        bottom-0 py-24 pl-4 duration-500
        ${ open ? "left-0" : "left-[-100%]"}
        `}>
          <li>
            <Link
              className="py-7 px-3 inline-block"
              to="/about"
            >
              about
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;