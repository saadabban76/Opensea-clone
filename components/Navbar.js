import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CloseIcon from '@mui/icons-material/Close';
import { ExitToApp } from '@mui/icons-material';




const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [style, setStyle] = useState('absolute hidden top-[10%] -right-[100%] w-full z-10 p-4 bg-white');

    return (
    <div className='flex justify-between pt-4 lg:pt-6'>
        {/* Left */}
        <div className='flex items-center'>
            <Image src={Logo} alt="logo" className='w-[600px] md:w-[20rem]' />
        </div>
        {/* Middle */}
        <div className='flex w-[600px] lg:w-full mx-8 relative items-center justify-evenly '>
            <input 
                type='search'
                placeholder='Search items, collections, and accounts'
                className="duration-500 ease-in-out hover:shadow-lg hidden md:inline-block pl-[40px] hover:bg-white  bg-[#e8f2f5] rounded-lg w-full p-3"
            />
            <SearchIcon className="md:left-2 cursor-pointer right-2 absolute  text-gray-400" />
        </div>
        {/* Right */}

        <div className='xl:flex mr-7 space-x-7 hidden'>
            <button className='font-semibold'>Explore</button>
            <button className='font-semibold'>Stats</button>
            <button className='font-semibold'>Resources</button>
            <button className='font-semibold'>Create</button>
        </div>

        <div className='flex space-x-4 text-gray-900'>
        <AccountCircleIcon className='hidden lg:block' fontSize='large' />
            <AccountBalanceWalletIcon className='hidden lg:block' fontSize='large' />
            <ShoppingCartIcon className='cursor-pointer' fontSize='large' />
            <div className='md:hidden block'>
            {sidebar ? (
                <CloseIcon onClick={()=>setSidebar(!sidebar)} className='cursor-pointer' fontSize='large' />
            ):(
                <MenuIcon onClick={()=>setSidebar(!sidebar)} className='cursor-pointer' fontSize='large' />
            )}
            </div>
       
        </div>
        
            <div className={sidebar ? 'absolute top-[10%] left-0 w-full z-10 p-4 bg-white' : 'absolute hidden top-[10%] -right-[100%] w-full z-10 p-4 bg-white'}>
                <div className='flex flex-col text-[1.3rem] gap-5'>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Explore</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Stats</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Resources</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Create</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Settings</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Dont click this</p>
                    <p className='w-full p-3 cursor-pointer tracking-wider font-semibold'>Language</p>
                    <p className='w-full p-3  cursor-pointer tracking-wider font-semibold'>Stats</p>
                    <div className='flex p-1 justify-center items-center gap-5'>
                        <button className='w-[98%] p-3 rounded-[0.5rem] text-white bg-[#007aff] '>Connect Wallet</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar