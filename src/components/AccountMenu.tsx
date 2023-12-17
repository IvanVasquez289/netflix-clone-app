import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
  if(!visible){
    return null;
  }

  return (
    <div className=' bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row items-center gap-3 w-full'>
                <Image 
                    src={'/images/default-blue.png'} 
                    alt='profile foto' 
                    width={'100'} 
                    height={'100'}
                    className='w-8 rounded-md'
                />
                <p className='text-white group/item group-hover/item:underline text-sm'>
                    Username
                </p>
            </div>
            <hr className='bg-green-600 h-px my-3'/>
            <div onClick={()=>signOut()} className='px-3 text-center text-white text-sm hover:underline'>
                Cerrar sesion
            </div>
        </div>
    </div>
  )
}

export default AccountMenu