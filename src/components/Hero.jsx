import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { SectionWrapper } from "../hoc";
import { profilePic } from '../assets';

const Hero = () => {
  const typeTarget = useRef( null);
  useEffect(() => {
    const options = {
      strings: ['Software engineer', 'Founding Developer', 'Data analyst', 'Cancer Survivor'],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    };

    const hi = new Typed(typeTarget.current, options);

    return () => {
      hi.destroy();
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingx} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>
        
        <div>
          <h1 className = {`${styles.heroHeadText} text-white`}>I am <span className='text-[#00eeff]'>Kai</span></h1>
          <h3 className = {`${styles.heroSubText}`}> and I am a <span ref={typeTarget} className='text-[#00eeff]'></span></h3>
          <p className={`${styles.heroSubSubText} mt-2 text-white-100`}>
            I develop web applications, AI, <br className='sm:block hidden' /> and data analytics tools.
          </p>

        </div>
        <img src={profilePic} alt="Kai's Profile" className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[300px] rounded-full border-4 border-[#00eeff]"/>


      </div>

      {/* <ComputersCanvas /> */}
      {/* <img src={profilePic} alt="Kai's Profile" className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[300px] rounded-full border-4 border-[#00eeff]"/> */}
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>

      </div>
    </section>
  )
}

// export default Hero
export default SectionWrapper(Hero, "Hero")