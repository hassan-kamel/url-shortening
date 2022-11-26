import React, { Children } from 'react';

interface Props {
  children: React.ReactNode;
  bg?: string;
  rounded?: string;
  text?: string;
  hover?: string;
}

const Button = ({ children, bg, rounded, text, hover }: Props) => {
  return (
    <button
      className={`${bg ? bg : 'bg-primaryCyan'} ${
        rounded ? rounded : 'rounded-3xl'
      } px-6 py-[8px] ${text ? text : 'text-white'}  capitalize 
      `}>
      {children}
    </button>
  );
};

export default Button;
