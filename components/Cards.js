import Image from 'next/image';
import React from 'react';
import lightborn from "../assets/lightborn.png";



const Cards = ({title, image}) => {
  return (
    <div className="relative flex 
    mt-6 w-full md:h-[260px] bg-black xl:h-[360px] overflow-hidden rounded-[1rem]">
    <Image
      src={image}
      alt="image"
      className="rounded-[1rem] 
        hover:scale-110 duration-500 cursor-pointer
        ease-out object-cover z-0"
    />

    <div className="absolute text-white 
    font-bold z-0 bottom-2 left-5 flex flex-col ">
      <p>{title}</p>
      <p>Floor: 0.14E TH</p>
    </div>
  </div>
  )
}

export default Cards