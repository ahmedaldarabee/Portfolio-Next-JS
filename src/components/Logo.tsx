import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
    <>
    {/* justify-content: Horizontal X */}
    {/* align-items: Vertical Y */}

        <Link href='/' className='flex items-end gap-2'>
            <Image loading="lazy" src="/logo.png" width={32} height={32} alt="logo image" />
            <div className='relative'>
                <h2 className='capitalize text-white text-xl font-bold tracking-wide'>ahmed al darabee</h2>
                <div className='absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700'></div>
            </div>
        </Link>
    </>
    )
}

export default Logo