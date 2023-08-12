import { HiHome, HiUser } from 'react-icons/hi'
import { HiChatBubbleBottomCenterText, HiEnvelope, HiRectangleGroup, HiViewColumns } from 'react-icons/hi2'
import Link from 'next/link';
import {useRouter} from 'next/router'
//  links
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
  bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
    <div className='flex w-full xl:flex-col items-center justify-between 
    xl:justify-center gap-y-10 px-4 md:px-40 h-[70px] xl:px-0 xl:h-max py-8 bg-cyan-600/30 
    backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full'>
      {links.map((item, index) => (
            <Link key={index} href={item.path}>
          
<div
  className={`${
    item.path === pathname && 'text-accentprimary'}
    hover:text-accentprimary transition-all duration-300 relative group flex items-center`}
>
  {/* tooltip */}
  <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
    <div className='bg-white backdrop-blur-lg relative flex text-primary items-center p-[6px] rounded-[3px] tooltip'>
      <div className='text-[12px] leading-none font-semibold capitalize'>{item.name}</div>
                <div className='border-solid border-l-white border-l-8
       border-y-transparent border-y-[6px] border-r-0 absolute -right-2 '></div>
   
              </div>
  </div>

  {item.icon}
</div>




               
              
            </Link>
            ))}
    </div>
  </nav>;
};

export default Nav;
