import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='flex absolute -left-[3.8%] w-full justify-between mx-10 
    bg-[#007aff] p-10 text-[0.8rem] md:text-[1rem] text-gray-200 my-10 border-t-2 '>
        <div className='flex space-x-1'>
            <CopyrightIcon />
            <p>2003-2022 Saad Networks, Inc</p>
        </div>
        <div className='flex space-x-3'>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer