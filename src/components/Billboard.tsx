import React from 'react'
import { BsInfoCircle } from "react-icons/bs";
import PlayButton from './PlayButton';

interface BillBoardProps {
    movie: any
}

const Billboard: React.FC<BillBoardProps> = ({movie}) => {
  console.log(movie)
  return (
    <div className='relative h-[56.25vw]'>
        <video 
            autoPlay 
            muted 
            loop 
            poster={movie?.thumbnail} 
            src={movie?.videoUrl}
            className='w-full  h-[56.25vw] object-cover brightness-50'
        >
        </video>
        <div className='absolute top-[35%] md:top-[30%] ml-4 md:ml-16 '>
            <p className='
                text-white 
                font-bold 
                text-1xl 
                md:text-5xl 
                h-full 
                w-[50%] 
                lg:text-6xl 
                drop-shadow-xl'
            >
                {movie?.title}
            </p>
            <p className=' 
                text-white 
                text-[8px] 
                md:text-lg 
                mt-3 
                md:mt-8 
                w-[90%] 
                md:w-[80%] 
                lg:w-[50%] 
                drop-shadow-xl
            '>
                {movie?.description}
            </p>
            <div className='flex flex-row mt-3 md:mt-4 gap-3'>
                <PlayButton movieId={movie?.id}/>
                <button className='
                    bg-white bg-opacity-50 text-white px-2 py-1 md:px-4 md:py-3 text-xs md:text-xl
                    rounded-md flex flex-row items-center font-semibold w-auto gap-2 hover:bg-opacity-20 transition
                '>
                    <BsInfoCircle />
                    Mas info
                </button>
            </div>
        </div>
    </div>
  )
}

export default Billboard