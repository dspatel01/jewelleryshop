import React from 'react'
import HeroSection from '../component/HeroSection'
import CategoryPage from '../component/CategoryPage'
//import earings from '../assets/61LTJSjq18L._AC_UY300_.jpg'
import ring1 from '../assets/ring1.webp'
import neckless from '../assets/-473Wx593H-469138739-multi-MODEL.avif'
import ring2 from '../assets/w8v79_512.webp'
import TestimonialSlider from '../component/slider/TestmonialSlider'
import { BsPatchCheck } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

import TopRatedProduct from '../component/toprated/TopRatedProduct'



const Home = () => {
  return (
    <>
      <div className='w-full'>
        <HeroSection />
        <h1 className='text-center text-4xl mt-10 '>Our Category</h1>
        <CategoryPage />

        <h1 className='text-center text-4xl my-10 '>Top Rated Products</h1>

        <TopRatedProduct />



        <div className='w-full flex items-center justify-center mt-10 mb-16 '>
                <div className='w-[100%] flex justify-around flex-wrap mx-4 '>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >

                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]'  >

                        <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[220px] h-[220px]' >
                            <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                            <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                            <div className='xl:px-5 lg:px-5 md:px-5 sm:px-1 px-1 w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                                <h1 className=' tracking-wide'>Neckless</h1>
                                <div className='flex  text-md'>
                                    <div className='tracking-wide'>Price:₹ 1500</div>
                                    <div className='line-through text-gray-100 ml-3'>₹:2000</div>

                                </div>
                                <div className='mt-1 flex justify-center items-center  bg-green-800 px-2 w-[fit-content]'>
                                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                                    <div className='tracking-wide ml-1'>3.5</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='bg-black text-white mt-8 px-12 py-3 text-xl rounded-lg'>See more</button>
                </div>
            </div>


{/* 
        <div className='w-full flex items-center justify-center mt-10 mb-16 '>
          <div className='w-[100%] flex justify-around flex-wrap mx-4 '>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>

                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]' >
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-400'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={neckless} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={ring1} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative bg-red-800 xl:w-80 lg:w-80 md:w-[45%] sm:w-[48%] w-[48%]  rounded-xl my-2 mx-0  xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'  >

              <div className='relative xl:w-80 lg:w-80 md:w-[100%] sm:mx-0  w-[100%]  shadow-lg rounded-xl cursor-pointer bg-red-50 xl:h-[350px] lg:h-[350px] mg:h-[350px] sm:h-[250px] h-[250px]'>
                <div className='bg-black w-10 h-10 text-white rounded-full absolute top-2 right-4  flex justify-center items-center'>20%</div>
                <img src={ring2} alt="" className=' w-[100%] h-[100%] rounded-xl ' />
                <div className=' w-full absolute bottom-0  bg-[rgba(0,0,0,0.8)] text-white rounded-b-xl py-2'>
                  <h1 className='ml-5 tracking-wide'>Neckless</h1>
                  <div className='flex ml-5 text-md'>
                    <div><span className='tracking-wide'>Price:₹ </span>1500</div>
                    <div className='line-through ml-9 text-gray-600'>₹: 2000</div>

                  </div>
                  <div className='mt-2 flex justify-center items-center ml-5  bg-green-800 px-2 w-[fit-content]'>
                    <div className='text-yellow-500 text-xl'>&#9733; </div>
                    <div className='tracking-wide ml-1'>3.5</div>
                  </div>
                </div>
              </div>
            </div>

            <button className='bg-black text-white mt-8 px-12 py-3 text-xl rounded-lg'>See more</button>
          </div>
        </div> */}

        {/* testimonial */}

        <TestimonialSlider />



        {/* shippingDetails */}

        <div className=" w-full h-[fit-content] flex justify-around items-center bg-[#f1f1f1]  flex-wrap">
          <div className="cursor-pointer flex justify-around items-center flex-col my-10">
            <div className='text-5xl mb-2'>
              <BsTrophy />
            </div>
            <div className='text-center text-xl'>
              <h3>Hight Quality</h3>
              <p>crafted from top metarials</p>
            </div>
          </div>
          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <BsPatchCheck />
            </div>
            <div className='text-center text-xl'>
              <h3>Warranty Protection</h3>
              <p>over 2 years</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineLocalShipping />
            </div>
            <div className='text-center text-xl'>
              <h3>Free Shiping</h3>
              <p>order over 150 ₹</p>
            </div>
          </div>

          <div className="cursor-pointer flex justify-around items-center flex-col py-10">
            <div className='text-5xl mb-2'>
              <MdOutlineSupportAgent />

            </div>
            <div className='text-center text-xl'>
              <h3>24/7</h3>
              <p>dedicated support</p>
            </div>
          </div>
        </div>


      </div >
    </>
  )
}

export default Home
