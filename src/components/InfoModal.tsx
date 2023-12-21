import React,{useCallback,useEffect,useState} from 'react'
import { IoClose } from "react-icons/io5";

import PlayButton from './PlayButton';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';

interface InfoModalProps {
    visible?:boolean;
    onClose: any;
}
const InfoModal: React.FC<InfoModalProps> = ({visible,onClose}) => {
  
  const [isVisible,setIsVisible] = useState(!!visible)
  const {movieId} = useInfoModal()
  const {data} = useMovie(movieId)

  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible])
  
  const handleClose = useCallback(()=>{
    setIsVisible(false)
    setTimeout(() => {
        onClose()
    }, 300);
  },[onClose])

  if(!visible){
    return null;
  }

  return (
    <div
        className='
            z-50 transition duration-300 bg-black flex flex-row items-center justify-center
            overflow-x-hidden overflow-y-auto fixed inset-0 bg-opacity-80
        '
    >
        <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
            <div className={`
                ${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto
                bg-zinc-900 drop-shadow-md
            `}
            >
                <div className='relative h-96'>
                    <video 
                        src={data?.videoUrl} 
                        autoPlay 
                        loop 
                        poster={data?.thumbnail}
                        muted
                        className=' w-full brightness-75 object-cover h-full'
                    >
                    </video>
                    <div 
                        onClick={handleClose} 
                        className='
                            cursor-pointer absolute top-3 right-3 rounded-full bg-black h-10 w-10 bg-opacity-70
                            flex items-center justify-center
                        '
                    >
                        <IoClose color='white' size={25}/>
                    </div>
                    <div
                        className='
                            absolute bottom-[10%] left-10
                        '
                    >
                        <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                            {data?.title}
                        </p>
                        <div className='flex flex-row gap-4 items-center'>
                            <PlayButton movieId={data?.id}/>
                            <FavoriteButton movieId={data?.id}/>
                        </div>
                    </div>
                </div>
                <div className='px-12 py-8'>
                    <p className='text-green-400 font-semibold text-lg'>
                        Nuevo
                    </p>
                    <p className='text-white text-lg'>
                        {data?.duration}
                    </p>
                    <p className='text-white text-lg'>
                        {data?.genra}
                    </p>
                    <p className='text-white text-lg'>
                        {data?.description}
                    </p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default InfoModal