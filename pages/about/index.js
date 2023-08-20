//  data
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress } from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from 'react-icons/si'
import React,{useState} from 'react'



import Avatar from '../../components/Avatar';
import Circles  from '../../components/Circles'
import { Circle, DivideSquare } from 'react-feather';

import {motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [  <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />,],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden"  animate="show" exit="hidden" className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar/>
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 font-semibold '>
      <div className='flex-1 flex flex-col  justify-center '>
        <h2 className='h2'>Crafting Web Experiences with <span className='text-accentprimary'> Passion</span> and <span className='text-accentprimary'>Code </span> </h2>
        <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-8'> Hey there, I&rsquo;m Anandhu S Kumar, , a dedicated and skilled MERN stack developer. With a strong passion for problem-solving and a commitment to delivering high-quality solutions, I thrive in the dynamic world of web development. I embrace challenges with open arms, believing that they&rsquo;re stepping stones to progress. Self-motivated and adaptable, always excited to explore new opportunities and expand my skills.Let&rsquo;s connect and explore the world of web development together!</p>
     </div>
      <div className='flex flex-col w-full xl:max-w-[48%] h-[380px] '>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:m-0 mb-4'>
          {aboutData.map((item, idx) => {
            return (
              <div className={`${index === idx && 'text-accentprimary after:w-[100%] after:bg-accentprimary  after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute font-semibold after:-bottom-1 after:left-0`} key={idx}
              onClick={()=>setIndex(idx)}>
                {item.title}
              </div>
             )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col  gap-y-2 xl:gap-y-4 items-center xl:items-start '>
          {aboutData[index].info.map((item, idx) => {
            return <div key={idx} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>

              <div className='flex gap-x-4'>
                
              {item.icons?.map((icon, idx) => {
                return <div key={idx} className='text-2xl '> {icon} </div>
              })}
                </div>
            </div>
          }) }
        </div>
     </div>
    </div>
  </div>;
};

export default About;
