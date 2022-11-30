import Image from 'next/image';
import React from 'react';
import verified from '../assets/verified.png';

const CollectionCard = ({index, image, title, floor, volume}) => {
  return (
    <div className='flex rounded-[0.9rem] cursor-pointer shadow-gray-800 hover:shadow-xl px-2 md:mx-3 xl:mx-7 justify-between my-3'>
        <div className='flex space-x-7'>
            <h2 className='text-2 font-bold self-center text-gray-600'>{index}</h2>
            <Image src={image} alt="image" className='rounded-[1rem] h-[80px] w-[80px]' />

            <div className='flex flex-col space-y-1'>
                <div className='flex space-x-2 items-center'>
                <p className='font-bold text-gray-900'>{title}</p>
                <span><Image src={verified} alt="" className='h-[1rem] w-[1rem]' /></span>
                </div>
                <p className='text-gray-600'>Floor: {floor}</p>
            </div>
        </div>

        <div className=''>
            <p className='font-bold'>{volume}</p>
        </div>

    </div>
  )
}

export default CollectionCard