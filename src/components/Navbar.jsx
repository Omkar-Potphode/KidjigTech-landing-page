import { useState } from 'react';
import { Logo } from '../assets';
import { navbarContent } from '../utils/constant';
import { Button } from './Button';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className='sticky top-0 bg-transparent text-white h-[80px] z-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-black via-custom-blue to-black opacity-1'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center h-full'>
          <div className='flex items-center'>
            <img src={Logo} alt='Logo' className='h-[54px]' />
          </div>

          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='inline-flex items-center p-2 ml-3 text-sm text-white md:hidden'
          >
            {isNavOpen ? <RxCross2 className='w-9 h-9' /> : <RxHamburgerMenu className='w-9 h-9' />}
          </button>

          <nav className={`${
            isNavOpen ? 'block' : 'hidden'
          } md:flex flex-1 justify-center space-x-8 absolute md:relative top-full md:top-0 left-0 w-full bg-black md:bg-transparent z-10 md:z-0 py-4 md:py-0`}>
            <ul className='flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0'>
              {navbarContent.map((item) => (
                <li key={item.title} className='cursor-pointer'>
                  <a href="#" className='block px-4 py-2 text-lg rounded-md text-white hover:bg-blue-500 transition duration-300'>
                    {item.title}
                  </a>
                </li>
              ))}
              <li className='block md:hidden'>
                <Button variant='outline' className='w-full text-center'>
                  Book a call
                </Button>
              </li>
            </ul>
          </nav>

          <div className='hidden md:flex'>
            <Button variant='outline'>Book a call</Button>
          </div>
        </div>
      </header>
    </>
  );
};
