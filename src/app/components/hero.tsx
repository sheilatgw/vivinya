import React from 'react'
import Image
 from 'next/image'
function Hero() {
  return (
    <div className="relative w-full h-screen">
  <Image
    src="/testlightpc.png"
    alt="light"
    fill
    className="object-cover md:object-contain transition-opacity duration-500 opacity-100 dark:opacity-0"/>
    <Image
    src="/testdarkpc.png"
    alt="dark"
    fill
    className="object-cover md:object-contain transition-opacity duration-500 opacity-0 dark:opacity-100"/>
    <div className="absolute inset-0 flex flex-col md:flex-row items-end mx-5">
      <div className="flex flex-col gap-2 text-5xl md:text-9xl font-bold uppercase">
        <p>engineer  <span className='text-4xl text-yellow-200'>&</span></p>
        <p>developer</p>
      </div>
    </div>
    </div>
 )
}

export default Hero