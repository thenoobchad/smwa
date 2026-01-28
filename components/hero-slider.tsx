"use client"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export const HeroSlider = () => {
    return (

        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="h-[70vh] md:h-120 lg:h-130 w-full relative overflow-hidden ">
                        <Image
                            fill
                            src="/images/backg.png"
                            alt="background"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute w-full h-full z-10  bg-black/50 text-white flex items-center  justify-center">
                            <div className="w-100! sm:w-180 flex flex-col gap-4">
                                <h4 className="uppercase text-2xl font-extrabold sm:text-3xl md:text-4xl text-center animate__animated    animate__fadeIn">Where Curiosity Meets Capability</h4>
                                <p className="text-center text-[16px] animate__animated animate__fadeInUp"> Equipping students with the critical thinking and technical skills needed to navigate a changing world</p>
                            </div>
                        </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] md:h-120 lg:h-130 w-full relative overflow-hidden ">
                        <Image
                            fill
                            src="/images/backg.png"
                            alt="background"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute w-full h-full z-10  bg-black/50 text-white flex items-center  justify-center">
                            <div className="w-100! sm:w-180 flex flex-col gap-4">
                                <h4 className="uppercase text-2xl font-extrabold sm:text-3xl md:text-4xl text-center animate__animated    animate__fadeIn">Drafting the Blueprint of Tomorrow</h4>
                                <p className="text-center text-[16px] animate__animated animate__fadeInUp">From robotics to rhetoric, we provide the platform for students to build their own unique paths.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[70vh] md:h-120 lg:h-130 w-full relative overflow-hidden ">
                        <Image
                            fill
                            src="/images/backg.png"
                            alt="background"
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute w-full h-full z-10  bg-black/50 text-white flex items-center  justify-center">
                            <div className="w-100! sm:w-180 flex flex-col gap-4">
                                <h4 className="uppercase text-2xl font-extrabold sm:text-3xl md:text-4xl text-center animate__animated    animate__fadeIn">Your Future, Carefully Crafted</h4>
                                <p className="text-center text-[16px] animate__animated animate__fadeInUp">Join a community dedicated to turning ambitious dreams into tangible achievements.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
   
            </Swiper>
        </>
    );
}
