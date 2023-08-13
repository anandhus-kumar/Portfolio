import  Image from 'next/image'

import Link from 'next/link'

import {HiArrowRight} from 'react-icons/hi2'








const ProjectsBtn = () => {
  return <div className='mx-auto xl:mx-0'>
    <Link href={'/work'} className='relative flex justify-center items-center '>
      <Image src={'/myproject.png'} width={141} height={148} className='animate-spin-slow  w-full h-full max-w-[141px] max-h-[148px]'/>
       <HiArrowRight className='absolute text-2xl  hover:text-[#238bed] hover:translate-x-2 transition-all duration-300 animate-pulse'/>
      
      
    </Link>
    
  </div>;
};

export default ProjectsBtn;
