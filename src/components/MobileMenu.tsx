import React from 'react'

interface MobileMenuProps {
    visible?: boolean;
}
const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
  if(!visible){
    return null;
  }

  return (
    <div className='bg-black w-56 absolute left-0 top-8 py-5 flex flex-col border-2 border-gray-800'>
       <div className='flex flex-col gap-4'>
            <div className='text-white text-center px-3 hover:underline'>
                Home
            </div>
            <div className='text-white text-center px-3 hover:underline'>
                Series
            </div>
            <div className='text-white text-center px-3 hover:underline'>
                Peliculas
            </div>
            <div className='text-white text-center px-3 hover:underline'>
                Nuevo y popular
            </div>
            <div className='text-white text-center px-3 hover:underline'>
                Mi lista
            </div>
            <div className='text-white text-center px-3 hover:underline'>
                Buscar por categoria
            </div>
       </div>
    </div>
  )
}

export default MobileMenu