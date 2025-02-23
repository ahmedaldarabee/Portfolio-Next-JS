import React from 'react'
import { ArrowRight, DollarSign, MoveRight } from 'lucide-react';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';
import { clients } from '@/constants/clients';
import { feature, featuresBlock } from '@/constants/features';
import FeatureCard from '@/components/FeatureCard';
import FeatureBlock from '@/components/FeatureBlock';
import PricingSection from '@/components/PricingSection';
import FeedbackCard from '@/components/FeedbackCard';
import { feedbacks } from '@/constants/feedbacks';

const Home = () => {
  return (
    <main className='overflow-hidden pt-24 lg:pt-28 antialiased'>
        <div className='relative container'>
            {/* background image */}
            <Image
              src="/bg.png"
              width={1920}
              height={1080}
              alt='background image'
              className='absolute -z-50 w-full min-h-screen
              md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10'
            />

            {/* home section */}
            <section id='home' className='relative'>

              {/* to add bubble section */}
              <figure className='bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-48' />
              <figure className='bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20' />

              <div className='flex flex-col text-center space-y-12'>
                
                <div className='flex flex-col items-center space-y-6'>
                  <p className='rounded-3xl border border-slate-800 py-1 px-3 cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all'>
                    new feature now is available.
                    <ArrowRight className='inline ml-1 w-4 h-4'/>
                  </p>

                  <Heading title="ahmed nayel al darabee"/>
                  <p className=' capitalize max-w-[46rem] leading-normal sm:text-lg sm:leading-8'>
                    software engineer - full stack web developer [ MERN ]
                  </p>

                  <div className='flex items-center gap-4'>
                    <Button> get started
                      <MoveRight className='w-4 h-4'/>  
                    </Button>

                    <Link href="#pricing">
                      <Button variant='outline'>view pricing <DollarSign className='w-4 h-4' /> </Button>
                    </Link>

                  </div>

                </div>

                <Image
                src='/Hero-image.svg' width={670} height={370}
                alt="banner image"
                className='mx-auto shadow-xl'
                />

              </div>
            </section>

            {/* clients section */}
            <section id='clients' className='max-w-[62rem] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4'>

              {
                clients.map(({imageURL , alt},index) => (
                    <Image key={index} src={imageURL} width={120} height={80} alt={alt} className='w-40 md:w-full mx-auto'/>
                ))
              }

            </section>

            {/* feature section */}
            <section id="feature" className='flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28'>
              {/* section 1 */}
              <div className='relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

                <Image src='/bg2.png' width={1920} height={1080} alt='second banner' 
                  className='absolute -z-50 w-full top-0 left-0 opacity-5'
                />

                <div className='flex flex-col gap-4 items-center text-center lg:items-start lg:text-start'>

                  <Heading title='Powerful features to help you manage all your leads' />

                  <p className='lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8'>
                  Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros tupis ultrices metus morbid aliquet vel.
                  </p>

                  <Button> get started </Button>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-1 gap-4'>
                  {/* feature: that have main feature data not just structure as you see in the Feature interface */}
                  
                  {/*  {...feature} this section that mean all params we can sended into this component when interface that have too many props */}

                  {
                    feature.map((feature,index) => (
                      <FeatureCard key={index} {...feature} />
                    ))
                  }
                </div>

              </div>
              {featuresBlock.map((item,index) => (
                <FeatureBlock key={index} {...item}/>
              ))}
            </section>

            {/* pricing section */}
            <PricingSection/>

            {/* feedback section */}
            {/* we not needed to provide justify-center ,.... in flex! */}       
            <section id="feedback" className='flex flex-col gap-8'>
              <Heading title='Meet our Customers' isCentered={true}/>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>  
                  {
                    //data then moved into component
                    feedbacks.map((content,index) => (
                        <FeedbackCard {...content} key={index}/>
                    ))
                  }
              </div>
            </section>

            {/* service request */}
            <section id='service'>
              <div className='rounded-md flex justify-between lg:flex-row flex-col items-center gap-2 w-full bg-slate-800 transition-all border border-slate-600 hover:border-slate-500 p-7'>
                
                <div className='flex flex-col gap-2'>
                  <Heading title='Let’s try our service now!'/>
                  <p className='max-w-[35rem]'>Experience the power of Ocean CRM dashboard for engineering teams. Boost productivity and streamline collaboration. Get started today!</p>
                </div>

                  <Button> get started <ArrowRight className='w-4 h-4'/></Button>
              </div>
            </section>
        </div>
    </main>
  )
}

export default Home;