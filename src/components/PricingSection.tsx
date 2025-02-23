"use client"

// this component that's be as CSR because we needed to use hooks like use state to do tab switch

import React, { useState } from 'react'
import Heading from '@/components/Heading';
import PricingItems from '@/constants/pricing';
import PriceCard from '@/components/PriceCard';
import { PricingMode } from '@/types/interfaces';

const PricingSection = () => {
    const [mode , setMode] = useState<PricingMode>("monthly");

    const tabStyle = "basis-1/2 text-center py-2 text-white capitalize font-semibold tracking-wide rounded-lg cursor-pointer"

    return (
        <div id="pricing" className='flex flex-col gap-7'>      
            <Heading title='Find a plan to power your projects' isCentered={true}/>
            
            {/* toggle title */}
            <div className='max-w-[12rem] w-full mx-auto p-1 flex text-base bg-slate-800 rounded-lg'>
                
                <p  onClick={() => setMode("monthly")}  className={` ${tabStyle} ${mode === 'monthly' && 'bg-sky-600'}`}>monthly</p>  
                <p  onClick={() => setMode("yearly")}  className={` ${tabStyle} ${mode === 'yearly' && 'bg-sky-600'}`}>yearly</p>
            </div>

            {/* pricing content */}
            {/* don't forget that: we needed to define main data then we needed to moved into specific component */}
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                PricingItems.map((item,index) => (
                <PriceCard key={index} {...item} mode={mode}/>
                ))
            }
            </div>
        </div>
    )
}

export default PricingSection