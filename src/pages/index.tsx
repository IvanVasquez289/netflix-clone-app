import Billboard from "@/components/Billboard";
import InfoModal from "@/components/InfoModal";
import { MovieList } from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useBillboard from "@/hooks/useBillboard";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";
import useMovieList from "@/hooks/useMovieList";
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"


export async function getServerSideProps(context:NextPageContext){
  const session = await getSession(context);

  if(!session){
    return{
      redirect: {
        destination: '/auth',
        permanent:false,
      }
    }
  }


  return{
    props:{

    }
  }
}
export default function Home() {
  const {data} = useBillboard()
  const {data: movies = []} = useMovieList()
  const {data: favorites =[]} = useFavorites() 
  const {isOpen,closeModal} = useInfoModal()
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar/>
      <Billboard movie={data}/>
      <div className="pb-40">
        <MovieList title="Tendencia ahora" data={movies}/>
        <MovieList title="Mi lista" data={favorites}/>
      </div>
    </>
  )
}
