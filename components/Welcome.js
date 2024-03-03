import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Welcome = () => {

  const router = useRouter()

  return (
    
    <section className='h-screen flex bg-black relative'>
      {/* Background image */}
      <img className='object-cover w-full h-full opacity-75' src="/background/background.jpg" />
      {/* Greeting */}
      <div className='absolute right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-1/3 top-48'>
        <div className="reliative flex flex-col items-center">
          <h1 className='font-italianno text-golden text-7xl sm:text-8xl lg:text-9xl'>Welcome</h1>
          <h2 className='font-jockey text-smoke text-4xl lg:text-6xl uppercase border-b-2 absolute top-1/4 sm:top-1/3'>The Astra</h2>
          <h3 className='uppercase text-smoke font-jaldi tracking-widest sm:text-xl lg:text-2xl mt-8'>the place of taste</h3>
          <button onClick={()=>router.push('/menu/Beef')} className='tracking-wide bg-smoke font-jaldi py-1 px-4 lg:px-6 lg:py-2 rounded-md text-lg lg:text-xl mt-6 hover:bg-golden hover:px-8 duration-500'>Menu</button>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-col absolute bottom-5 right-5 sm:right-10 gap-3 text-2xl lg:text-4xl items-center">
        <Link href={'/'}><i className="fa-brands fa-instagram text-golden hover:text-smoke duration-300"></i></Link>
        <Link href={'/'}><i className="fa-brands fa-facebook text-golden text- hover:text-smoke duration-300"></i></Link>
        <Link href={'/'}><i className="fa-brands fa-whatsapp text-golden hover:text-smoke duration-300"></i></Link>
      </div>
    </section>
    
  )
}

export default Welcome