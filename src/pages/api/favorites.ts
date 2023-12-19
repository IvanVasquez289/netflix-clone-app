import type { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const {currentUser} = await serverAuth(req)
    const favoriteMovies = await prismadb.movie.findMany({
        where:{
            id: {
                in: currentUser.favoriteIds || ''
            }
        }
    })
    return res.status(200).json(favoriteMovies)
  } catch (error) {
    console.log(error)
  }

  
}