import Image from 'next/image'
import React from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='w-full fixed z-40'>
        <div className='bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6 flex flex-row items-center transition duration-500'>
            <Image 
                src={'/images/logo.png'} 
                width={'150'} 
                height={'300'} 
                alt='logo'
                // className='h-5 lg:h-7'
            />
            <div className='flex-row lg:flex hidden ml-8 gap-7'>
                <NavbarItem label='Home'/>
                <NavbarItem label='Series'/>
                <NavbarItem label='Peliculas'/>
                <NavbarItem label='Nuevo y popular'/>
                <NavbarItem label='Mi lista'/>
                <NavbarItem label='Buscar por categoria'/>
            </div>
            <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className=' text-white text-sm'>Buscar</p>
                <BsChevronDown className='text-white transition'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar