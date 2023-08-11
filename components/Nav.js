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
  return <nav>
    <div>
      {links.map((item, index) => {
        return <Link key={index} href={item.path}> {item.icon} </Link>
      })}
    </div>
  </nav>;
};

export default Nav;
