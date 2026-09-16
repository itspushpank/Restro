// import React from 'react'

import { MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "../data/data";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=> {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll)

  },[])

  return (
    <>
      <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}`}>
        <div className="flex justify-between items-center font-medium py-4 mx-auto max-w-7xl">
          <a href="/">
            <img src="/assets/logo.svg" alt="Logo" />
          </a>

          {/* Desktop navigation links */}

          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.name}
                  className="hover:text-zinc-600"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <a
            href="#booking-process"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            Book a Table
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile navigation drawer */}

      <div
        className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col space-y-6 font-medium">
          {navLinks.map((links) => (
            <a
              key={links.name}
              href={links.href}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition"
              onClick={() => setMobileOpen(false)}
            >
              {links.name}
            </a>
          ))}

          
        </div>
        <button
            onClick={() => setMobileOpen(false)}
            className="bg-zinc-800 text-white p-2 rounded-md aspect-square mt-4"
          >
            <XIcon />
          </button>
      </div>
    </>
  );
};

export default Navbar;
