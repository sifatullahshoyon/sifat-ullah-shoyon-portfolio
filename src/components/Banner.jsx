import React from 'react';
import bannerImg from '@/assets/images/banner/banner1.png';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='banner md:flex justify-around items-center h-screen relative'>
            {/* Content */}
            {/* red Bg Start */}
            <div className='red-bg'>Lorem ipsum dolor sit amet.</div>
            {/* red Bg End */}
            <div className='z-10'>
                <p className='text-[#FFE600] text-5xl font-bold'>Hello,</p>
                <h1 className='text-[90px] leading-tight text-white text-balance font-bold capitalize my-2'>I&apos;m Sifat <br /> Ullah  Shoyon</h1>
                <p className='text-[#59C378] text-[32px] font-semibold mb-6'>Front End Developer</p>
                <p className='mb-8'>My deep passion for programming and curiosity about emerging technologies <br /> continuously drives me to take on new challenges.</p>
                <div>
                    <button className='btn btn-primary mr-5'>Resume</button>
                    <button className='btn btn-success'>Hire Me</button>
                </div>
            </div>
            {/* shape Start */}
            <div className='bg-shape-one'></div>
            {/* shape End */}
            {/* Image */}
            <div className='z-10'>
                <Image src={bannerImg} alt='banner img' width={547} loading='lazy' placeholder='blur' />
            </div>
        </div>
    );
};

export default Banner;