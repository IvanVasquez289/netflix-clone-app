import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Image from "next/image";
import { useRouter } from "next/router";

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

const Profiles = () => {
  const {data: user} = useCurrentUser()
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-full">
        <div className="flex flex-col">
            <h1 className="text-3xl md:text-6xl text-white">Perfiles</h1>
            <div className="flex items-center justify-center gap-8 mt-10">
                <div onClick={()=> router.push('/')}>
                    <div className=" group flex-row w-44 mx-auto">
                        <div 
                            className="
                                w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent
                                group-hover:cursor-pointer group-hover:border-white overflow-hidden
                                
                            "
                        >
                            <Image src={'/images/default-blue.png'} alt="perfil" width={'300'} height={'300'}/>
                        </div>
                        <div className="mt-4 text-gray-400 text-2xl group-hover:text-white text-center">
                            {user?.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profiles