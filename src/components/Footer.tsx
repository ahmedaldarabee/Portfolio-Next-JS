import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import React , {ReactNode} from 'react'
import Logo from '@/components/Logo';
import Link from 'next/link';
import { footerColumns } from '@/constants/FooterLinks';

const Footer = () => {
    const socialLinks:ReactNode[] = [
        <Github key="" className='social-links'/>,
        <Linkedin key="" className='social-links'/>,
        <Facebook key="" className='social-links'/>,
        <Instagram key="" className='social-links'/>,
    ]

    const mediaLinks = [
        'https://github.com/ahmedaldarabee/',
        'https://www.linkedin.com/in/ahmed-al-darabee/',
        'https://www.facebook.com/Darabi78/',
        'https://www.instagram.com/se.ahmednayel/'
    ]
    
    const currentYear:ReactNode = new Date().getFullYear();

    return (
        <footer className='pt-20 pb-4'>

            {/* main section */}
            <div className='container mb:12 flex flex-col lg:flex-row'>
                {/* first box */}
                {/* as you see you needed to manage response section to each part not just main part! */}

                <div className='basis-1/3 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6'>
                    <Logo/>
                    <p className='text-lg'>
                        Making the world a better place through constructing elegant hierarchies.
                    </p>

                    <ul className='flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0'>
                        {
                            socialLinks.map((list,index) => (
                                <li key={index}>
                                    <Link href={mediaLinks[index]} target='_blank'>
                                        {list}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8'>
                        {
                            footerColumns.map((col,index) => (
                                <>
                                    <div key={index} className='capitalize flex flex-col md:text-center lg:text-start'>
                                        <h2 className='font-bold lg:text-lg text-slate-100 hover:text-sky-600 transition-all mb-6'> {col.title} </h2>

                                        <ul>
                                            {col.links.map((item,index) => (
                                                <li key={index} className='font-normal pb-3 hover:text-sky-400 transition-all hover:ps-1 cursor-pointer'>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ))
                        }
                </div>
            </div>

            {/* copy right section */}
            <div className='container border-t border-slate-700 '>
                <p className='capitalize py-2 text-center lg:text-start'>
                    &copy;{` ${currentYear} - ahmed al darabee all rights are reserved`}
                </p>
            </div>
        </footer>
    )
}

export default Footer;