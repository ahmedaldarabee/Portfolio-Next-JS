import React, { FC } from 'react'

interface HeadingProps {
    title:string,
    isCentered?:boolean;//? that mean optional to send this parameter
}

const Heading: FC<HeadingProps> = ({title,isCentered}) => {
    return ( 
        <h1 className={`bg-clip-text text-transparent capitalize bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-xl sm:text-4xl lg:text-5xl ${isCentered && 'text-center'}`}>
            {title}
        </h1>
    )
}

export default Heading;