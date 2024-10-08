import React, { useEffect } from 'react';
import image3 from '../../assets/heroImages/banner1222.png'
import './banner.css'
import AOS from 'aos'
import "aos/dist/aos.css"
const Banner1 = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className='relative flex justify-center items-center '>
            <div data-aos="fade-up" className='xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[98%] w-[98%] xl:h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[32vh] h-[24vh] flex my-10  wrapper '>
                <img className='w-full' src={image3} alt="" />
            </div>
            <div className='absolute xl:bottom-14 lg:bottom-14 md:bottom-14 sm:bottom-10 bottom-11 xl:left-[30%] lg:left-[30%] md:left-[30%] sm:left-[25%] left-[15%]'>
                <div className='cursor-pointer bg-black text-white px-3 xl:py-2 lg:py-2 md:py-2 sm:py-1 py-1 rounded-full xl:text-[16px] sm:text-[14px] text-[12px]'>Comming Soon</div>
            </div>
        </div>
    )
}

export default Banner1
