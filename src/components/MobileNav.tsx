"use client"

import { navLinks } from '@/constants/nav-links';
import { SquareMenu, X } from 'lucide-react';
import Link from 'next/link';
import React, {useState } from 'react'

const MobileNav = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev );
    }

    return (
        <>
            <div onClick={toggleMenu} className='flex md:hidden cursor-pointer md:cursor-none'>
                { isOpen === true ? <X className='scale-150' /> : <SquareMenu className='scale-150'/> }
            </div>

            <figure className={`absolute top-20 right-2 origin-top ${isOpen?'opacity-100 visible':'opacity-0 hidden'} w-full bg-slate-800 p-4 transition-all z-50`}>
                <nav className='w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide'>
                    {
                        navLinks.map((link,index) => (
                            <Link
                                onClick={toggleMenu}
                                href={`#${link}`} 
                                key={index}
                                className='py-1 px-2 transition-all hover:bg-slate-700 rounded-md hover:text-sky-400'>
                                {link}
                            </Link>
                        ))
                    }
                </nav>
            </figure>
        </>
    )
}

export default MobileNav