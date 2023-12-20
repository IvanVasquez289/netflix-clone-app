import React from 'react'
import { useRouter } from 'next/router'
import useMovie from '@/hooks/useMovie'
import { FaArrowLeft } from "react-icons/fa6";

const Watch = () => {
  const router = useRouter()
  const {movieId} = router.query;
  const {data} = useMovie(movieId as string)
  return (
    <div className='bg-black h-screen w-screen'>
        <nav
            className='
                fixed p-4 w-full z-10 flex flex-row items-center gap-8 bg-black bg-opacity-20
            '
        >
            <button>
                <FaArrowLeft size={30} color='white' onClick={()=> router.push('/')}/>
            </button>
            <p className=' text-white text-1xl md:text-2xl font-semibold'>
                <span className='font-light mr-1'>Viendo:</span>
                {data?.title}
            </p>
        </nav>
        <video className='h-screen w-screen' src={data?.videoUrl} autoPlay controls>
        </video>
    </div>
  )
}

export default Watch