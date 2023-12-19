import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
    const {data,isLoading,error} = useSWR('/api/favorites',fetcher,{
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })

    return{
        data,
        isLoading,
        error,
    }
}

export default useFavorites;