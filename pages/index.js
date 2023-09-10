import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import { easeInOut, motion } from 'framer-motion'

import { fadeIn } from '../variants'


const Home = () => {
  return <div classname='bg-primary/60 h-full'>
    <div className="w-full h-screen bg-gradient-to-r from-primary/20 via-black/40 to-black/10">
      <div className="text-center  flex flex-col justify-center pt-40 xl:pt-60  xl:text-left h-full container mx-auto ">
        <motion.div
            variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" 
          className="p flex flex-col w-full items-center xl:items-start xl:mt-24">
           <Image src="/index1.png" width={300} height={200}  className="  xl:w-[400px] "/>
         
          <motion.p
            variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className="font-semibold text-white mb-6"
            > -YOU BECAME WHAT YOU BELIVE</motion.p>
        </motion.div>
         
        <motion.p
          variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" 
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ">Embrace Your Beliefs, Shape Your Reality: Navigate through my portfolio and witness the fusion of dreams turned into digital wonders.
        </motion.p>
        <div className="flex justify-center xl:hidden relative pb-32">
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex xl:mt-[-50px] pb-52">
        <ProjectsBtn/>

        </motion.div>
         </div>
      </div>
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat xl:bg-right w-full h-full absolute mix-blend-screen opacity-90 translate-z-0">
      </div>

      
      <ParticlesContainer/>

      <motion.div variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" transition={{duration: 1, ease:easeInOut}}
        className="w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-10 lg:bottom-0 lg:right-[10%]"> <Avatar />  </motion.div>

      </div>
  </div>;
};

export default Home;
