// import React from 'react'


import { MenuIcon } from "lucide-react"
import { navLinks } from "../data/data"

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 z-20 px-auto w-full transition-all duration-300 bg-transparent">

            <div className="flex justify-between items-center font-medium py-4 mx-auto max-w-7xl">
                <a href="/">
                    <img src="/assets/logo.svg" alt="Logo" />
                </a>

                {/* Desktop navigation links */}

                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link)=>{
                        
                        return(<a href={link.href} key={link.name} className="hover:text-zinc-600">
                            {link.name}
                        </a>)

                    })}
                </div>

                <a href="#booking-process" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">Book a Table</a>

                <button className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square">
                    <MenuIcon />
                </button>
            </div>

        </nav>
    </>
  )
}

export default Navbar