import React from 'react'

interface BillBoardProps {
    movie: any
}

const Billboard: React.FC<BillBoardProps> = ({movie}) => {
  console.log(movie)
  return (
    <div className='relative h-[56.25vw]'>
        <video poster={movie?.thumbnail} src={movie?.videoUrl}></video>
    </div>
  )
}

export default Billboard