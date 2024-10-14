import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { profilePic } from '../assets';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

      </motion.div>
      {/* <img src={profilePic} alt="Profile of Kai" className='absolute top-0 right-0 w-[300px] rounded-full border-4 border-[#00eeff]'></img> */}


      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi, my name is Kai and I love developing tools that bring
        solutions to real world problems. My journey started when I was
        first diagnosed with Epithelioid Sarcoma back in 2017. While I was undergoing surgery,
        I studied cancer data admist the fear. <br></br>
        Fast forward to 2021, I got re-diagnosed with cancer and lost my right fingers from amputation.
        Admist the dark times, I wanted to make a difference in the world and thats when 
        I joined a start up, Authentic Media Ascension (AMA), through 
        The Garage - Northwestern's interdiscplinary start up incubator. <br></br>
        I was the founding software engineer at AMA and I was responsible for 
        developing an internal data analysis tool and initiated ETL process to aggregate/store data. 
        In 2022, AMA was acquired by tech unicorn, Jellysmack, and I was acqui-hired as a lead software engineer.<br></br>
        
        I was also re-diagnosed with cancer for the 3rd time and underwent radiation and chemotherapy treatment. (Hopefully, last one!)
        Despite the my life trying to drag me down, I never gave up. 
        With my resilience, I am determined to keep pushing forward for another challenge to overcome.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index = 
          {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")