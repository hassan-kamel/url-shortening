import React from 'react';
import Logo from './Logo';
import { navbar } from '../data/links';
import Button from './Button';

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <div className='container max-w-screen-xl mx-auto flex items-center gap-11 h-[12vh]'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='links'>
            <ul className='flex justify-start gap-8'>
              {navbar.map((link, idx) => {
                return (
                  <li
                    key={idx}
                    className='text-neutralGrayishViolet font-bold text-[16px] hover:text-neutralVeryDarkBlue cursor-pointer'>
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='actions ml-auto flex gap-2'>
            <Button bg='bg-white' text='text-black'>
              login
            </Button>
            <Button>sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
