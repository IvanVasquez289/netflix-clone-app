import Input from "@/components/Input";
import axios from "axios";
import Image from "next/image";
import { useCallback, useState } from "react";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/router";
import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'

const AuthPage = () => {
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(()=>{
    setVariant((currentVariant => currentVariant === 'login' ? 'register' : 'login'))
  },[])


  const login = useCallback(async () => {
    try {
      await signIn("credentials",{
        email,
        password,
        callbackUrl: '/profiles'
      })
    } catch (error) {
      console.log(error)
    }
  },[email,password,])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register',{email,name,password})
      login()
    } catch (error) {
      console.log(error)
    }
  },[email,name,password,login])

  return (
    <div className="relative w-full h-full bg-[url(/images/hero.jpeg)] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className=" bg-black sm:bg-opacity-50 h-full w-full">
        <nav className=" py-5 px-12">
          <Image src="/images/logo.png" alt="logo" width={"200"} height={"200"} className=" h-12"/>
        </nav>
        <div className=" flex justify-center">
            {/* clase w-full */}
            <div className=" bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-2xl text-white font-semibold mb-2">
                  {variant === 'login' ? 'Iniciar sesion' : 'Crear cuenta'}
                </h2>
                <div className="flex flex-col gap-4">
                    {variant === 'register' && (
                      <Input
                        id="name"
                        onChange={(e:any)=>{ setName(e.target.value)}}
                        label="Nombre de usuario"
                        value={name}
                      />
                    )} 
                    <Input
                      id="email"
                      type="email"
                      onChange={(e:any)=>{ setEmail(e.target.value)}}
                      label="Email"
                      value={email}
                    />
                    <Input
                      id="password"
                      type="password"
                      onChange={(e:any)=>{ setPassword(e.target.value)}}
                      label="Contraseña"
                      value={password}
                    />
                </div>
                <button onClick={variant === 'login' ? login : register} className="bg-red-600 mt-10 w-full text-white py-3 rounded-md hover:bg-red-700 transition">
                  {variant === 'login' ? 'Iniciar sesion' : 'Registrarse'}
                </button>
                <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                  <div 
                    onClick={() => signIn('google',{callbackUrl:'/profiles'})}
                    className="
                      bg-white 
                      w-10 h-10 
                      rounded-full
                      items-center justify-center
                      hover:opacity-80 transition
                      flex cursor-pointer
                    "
                  >
                    <FcGoogle size={30}/>
                  </div>
                  <div
                    onClick={() => signIn('github',{callbackUrl:'/profiles'})}
                    className="
                      bg-white 
                      w-10 h-10 
                      rounded-full
                      items-center justify-center
                      hover:opacity-80 transition
                      flex cursor-pointer
                    "
                  >
                    <FaGithub size={30}/>
                  </div>
                </div>
                <p className=" text-neutral-500 mt-12">
                  {variant === 'login' ? 'Primera vez usando Netflix?' : 'Ya tienes una cuenta?'}
                  <span 
                    className="ml-1 text-white hover:underline cursor-pointer"
                    onClick={toggleVariant}
                  >
                    {variant === 'login' ? 'Crear una cuenta' : 'Iniciar sesion'}
                  </span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;