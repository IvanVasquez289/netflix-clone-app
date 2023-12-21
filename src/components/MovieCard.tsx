import Image from "next/image";
import React from "react";
import { IoPlay } from "react-icons/io5";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";
import { BsChevronDown} from "react-icons/bs";

interface MovieCardProps {
  data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter()
  const {openModal} = useInfoModal()
  return (
    <div className="bg-zinc-900 relative col-span h-[12vw] group">
      <Image
        src={data?.thumbnail}
        alt="movie"
        width={"300"}
        height={"300"}
        className="
                w-full h-[12vw] rounded-md cursor-pointer object-cover shadow-xl
                transition duration group-hover:opacity-90 sm:group-hover:opacity-0 delay-300
            "
      />
      <div
        className="
                opacity-0 absolute top-0 transtition duration-200 z-10 invisible sm:visible delay-300
                w-full scale-0 group-hover:scale-110 
                group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100
            "
      >
        <Image
          src={data?.thumbnail}
          alt="movie"
          width={"300"}
          height={"300"}
          className="
                    cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]
                "
        />
        <div
          className="
                z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition rounded-b-md
            "
        >
            <div className="flex flex-row items-center gap-3">
                <div 
                    onClick={()=>{}}
                    className="
                        cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white 
                        rounded-full flex justify-center items-center transition hover:bg-neutral-300
                    "
                >
                    <IoPlay size={30} onClick={()=> router.push(`/watch/${data?.id}`)}/>
                </div>
                <FavoriteButton movieId={data?.id}/>
                <div 
                  onClick={()=> openModal(data?.id)}
                  className="
                    cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10
                    border-white border-2 flex justify-center items-center transition hover:border-neutral-300
                    rounded-full
                  "
                >
                  <BsChevronDown size={20} color="white"/>
                </div>
            </div>
            <p className="text-green-500 font-semibold mt-4">
                Nuevo <span className="text-white">2023</span>
            </p>
            <div className="flex flex-row mt-4 gap-2 items-center">
                <p className="text-white text-[10px] lg:text-sm">
                    {data?.duration}
                </p>
                <p className="text-white text-[10px] lg:text-sm">
                    {data?.genre}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
