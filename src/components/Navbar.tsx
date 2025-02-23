import React from 'react'
import Logo from './Logo';
import { navLinks } from '@/constants/nav-links';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 z-30 w-full bg-slate-900/50 backdrop-blur-md'>
            <div className='relative container py-6 flex justify-between transition-all'>
                <Logo/>

                {/* desktop nav for responsive design */}
                <nav className='hidden md:flex gap-5 capitalize'>
                    {navLinks.map((link,index) => (
                            <Link
                            key={index} 
                            href={`#${link}`}
                            className='hover:text-sky-500 transition-all text-sm font-semibold tracking-wide text-slate-200'>{link}</Link>
                        ))
                    }
                </nav>
                {/* mobile nav for responsive design */}
                <MobileNav/>
            </div>
        </header>
    )
}

export default Navbar;