import React from 'react'

const Trending = () => {
  return (
    <div className='mt-10 flex  flex-col justify-between mx-7 sm:mx-10  text-[1.2rem] md:text-[1.6rem]'>
        {/* left */}
        <div className='flex justify-between'>
        <div className='flex font-semibold
        space-x-4 border-b justify-between'>
            <button className='focus:border-b-[3px] 
            border-black border-b-[3px]'>
                Trending
            </button>
            <button className='focus:border-b-[3px] 
            focus:border-black'>
                Top
            </button>
        </div>
        <div className='flex space-x-3 text-[1.2rem]'>
          
            <button className='hidden md:block border duration-700 ease-in-out hover:shadow-lg
             border-gray-200 text-gray-800 p-1 w-[80px] text-center rounded-[0.7rem]'>
                24h v
            </button>
            <button className='hidden md:block border duration-700 ease-in-out hover:shadow-lg
             border-gray-200 text-gray-800 p-1 w-[130px] text-center rounded-[0.7rem]'>
                All chains v
            </button>
            <button className='border duration-700 ease-in-out hover:shadow-lg
             border-gray-200 text-gray-800 p-1 w-[140px] text-center rounded-[0.7rem]'>
                View all
            </button>
        </div>
        </div>
        

        {/* for the mobile screen */}
        <div className='my-7 space-x-2 md:hidden flex w-full'>
        <button className='border shadow-mg duration-700 ease-in-out hover:shadow-lg
             border-gray-200 text-gray-800 p-1 w-full text-center rounded-[0.7rem]'>
                All chains v
            </button>
        <button className='border shadow-mg duration-700 ease-in-out hover:shadow-lg
             border-gray-200 text-gray-800 p-1 m-auto w-full text-center rounded-[0.7rem]'>
                24h v
            </button>
        </div>
    </div>
  )
}

export default Trending