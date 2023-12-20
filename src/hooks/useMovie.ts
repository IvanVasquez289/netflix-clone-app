import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (id:string) => {
    const {data,isLoading,error,mutate} = useSWR(`/api/movies/${id}`,fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })

    return{
        data,
        isLoading,
        error,
        mutate
    }
}

export default useMovie;