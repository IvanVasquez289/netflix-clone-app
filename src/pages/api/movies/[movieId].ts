import type { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../../lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import mongoose from "mongoose";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET'){
    return res.status(405).end();
  }

  try {
    await serverAuth(req)
    const {movieId} = req.query
    const valid = mongoose.Types.ObjectId.isValid(movieId as string)

    if(!valid){
      const error = new Error('ID INVALIDO PARA MONGO')
      return res.status(404).json({msj: error.message})
    }

    if(typeof movieId !== 'string'){
        throw new Error('ID no valido')
    }
    
    if(!movieId){
        throw new Error('ID no valido')
    }

    const movie = await prismadb.movie.findUnique({
        where:{
            id: movieId
        }
    })

    if(!movie){
        throw new Error('ID no valido')
    }

    return res.status(200).json(movie)

  } catch (error) {
    console.log(error)
  }
}
