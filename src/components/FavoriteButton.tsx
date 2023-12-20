import React, {useCallback,useMemo} from 'react'
import axios from 'axios';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorites';
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";


interface FavoriteButtonProps {
    movieId: string;
}


const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {

  const {mutate: mutateFavorites} = useFavorites()
  const {data: currentUser, mutate: mutateUser} = useCurrentUser()
  
  const isFavorite = useMemo(()=>{
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId)
  },[currentUser, movieId])


  const toggleFavorite = useCallback(async () => {
    let response;
    if(isFavorite){
        response = await axios.delete('/api/favorite',{data: {movieId,currentUser}})
    }else {
        response = await axios.post('/api/favorite',{movieId,currentUser})
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutateUser({...currentUser,favoriteIds:updatedFavoriteIds})
    mutateFavorites()
  },[currentUser,isFavorite,movieId,mutateFavorites,mutateUser])
  return (
    <div
      onClick={toggleFavorite}
      className="
        cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 group/item
        rounded-full flex justify-center items-center transition hover:border-neutral-300
    "
    >
      {isFavorite ? (
        <FaCheck className="text-white" size={30} />
      ) : (
        <FiPlus className="text-white" size={30} />
      )}
    </div>
  );
}

export default FavoriteButton;