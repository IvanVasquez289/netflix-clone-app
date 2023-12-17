import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import NavbarItem from './NavbarItem'
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const Navbar = () => {
  const [showMobileMenu,setShowMobileMenu] = useState(false);
  const [showAccountMenu,setShowAccountMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(currentValue => !currentValue)
  },[])

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu(currentValue => !currentValue)
  },[])


  return (
    <nav className='w-full fixed z-40'>
        <div className='bg-zinc-900 bg-opacity-90 px-4 md:px-16 py-6 flex flex-row items-center transition duration-500'>
            <Image 
                src={'/images/logo.png'} 
                width={'150'} 
                height={'300'} 
                alt='logo'
                className='h-5 lg:h-7 w-20'
            />
            <div className='flex-row lg:flex hidden ml-8 gap-7'>
                <NavbarItem label='Home'/>
                <NavbarItem label='Series'/>
                <NavbarItem label='Peliculas'/>
                <NavbarItem label='Nuevo y popular'/>
                <NavbarItem label='Mi lista'/>
                <NavbarItem label='Buscar por categoria'/>
            </div>
            <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className=' text-white text-sm'>Navegar</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                <MobileMenu visible={showMobileMenu}/>
            </div>
            <div className='flex-grow flex justify-end gap-7 items-center'>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                    <BsSearch />
                </div>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                    <BsBell />
                </div>
                <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div className='w-6 h-6 lg:h-10 lg:w-10 rounded-md overflow-hidden' onClick={toggleAccountMenu}>
                        <Image src={'/images/default-blue.png'} alt='perfil image' width={'100'} height={'100'}/>
                    </div>
                    <BsChevronDown 
                        className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} 
                        onClick={toggleAccountMenu}
                    />
                    <AccountMenu visible={showAccountMenu}/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar