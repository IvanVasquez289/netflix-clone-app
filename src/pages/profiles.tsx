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

const Profiles = () => {
  return (
    <div>
        <p className="text-4xl text-white">Perfiles</p>
    </div>
  )
}

export default Profiles