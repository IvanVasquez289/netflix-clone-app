import React from 'react'
import { IoPlay } from "react-icons/io5";
import { useRouter } from 'next/router';

interface PlayButtonProps {
    movieId: string
}

const PlayButton: React.FC<PlayButtonProps> = ({movieId}) => {
  const router = useRouter()
  return (
    <button
        onClick={()=> router.push(`/watch/${movieId}`)}
        className='
            bg-white rounded-md flex flex-row items-center px-2 py-1 md:px-4 md:py-3 w-auto font-semibold
            transition hover:bg-neutral-300
        '
    >
        <IoPlay size={20} className='mr-1'/>
        Play
    </button>
  )
}

export default PlayButton