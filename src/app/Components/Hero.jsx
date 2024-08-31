import Image from 'next/image'
import React from 'react'
import hero from '../../../public/OriginalBicycle.png'
const Hero = () => {
  return (
    <>
<section>
    <Image src={hero} alt='hero' className='grayscale'/>
</section>

    </>
  )
}

export default Hero