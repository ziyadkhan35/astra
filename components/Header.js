import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const Header = () => {

  const navbar = useRef()
  const mobileMenu = useRef()
  const [bar, setBar] = useState(true)

  useEffect(()=>{
    window.onscroll = function(){scrollFunction()}
  })

  function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
      navbar.current.style.backgroundColor = "#142641";
    }else{
      navbar.current.style.backgroundColor = "transparent";
    }
  }

  const toggleMenu = () => {
    if(bar){
      mobileMenu.current.style.right = '0'
    }else{
      mobileMenu.current.style.right = '-100%'
    }
    setBar(!bar)
  }


  return (
    <>
    {/* Navbar Desktop */}
    <nav className='fixed top-0 flex z-10 items-center justify-between w-full px-2 lg:px-10 py-2 md:py-3 duration-500' ref={navbar}>
      {/* Logo */}
      <a href="/" className='font-jockey uppercase text-xl sm:text-4xl md:text-5xl text-white tracking-wide border-b-2 sm:pb-1'>ASTRA</a>

      {/* Menu */}
      <div className='hidden md:flex'>
        <Link href='/' className='text-smoke tracking-wider font-jaldi text-2xl me-12 hover:text-hover-smoke duration-150'>Home</Link>
        <Link href='/reservation' className='text-smoke tracking-wider font-jaldi text-2xl me-12 hover:text-hover-smoke duration-150'>Reservation</Link>
        <Link href='/branches' className='text-smoke tracking-wider font-jaldi text-2xl me-12 hover:text-hover-smoke duration-150'>Branches</Link>
        <Link href='/menu/Beef' className='text-smoke tracking-wider font-jaldi text-2xl me-12 hover:text-hover-smoke duration-150'>Menu</Link>
        <Link href='#contact' className='text-smoke tracking-wider font-jaldi text-2xl md:me-5 lg:me-12 hover:text-hover-smoke duration-150'>Contact</Link>
      </div>
        
      {/* Bars Icon*/}
      <button onClick={()=>toggleMenu()} className='group block md:hidden text-smoke'>
        <i className="fa-solid fa-bars-staggered"></i>
      </button>

    </nav>

    {/* Navbar Mobile */}
      <nav ref={mobileMenu} className='flex flex-col fixed h-screen gap-2 top-0 -right-full bg-body z-10 py-2 w-3/4 duration-300 rounded-sm'>
        <button onClick={()=>toggleMenu()} className='text-smoke text-end text-xl me-4'>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="flex flex-col gap-3 items-end me-4 font-jaldi mt-2 sm:text-xl">
          <Link href='/' className='text-smoke hover:text-hover-smoke duration-150'>Home</Link>
          <Link href='/reservation' className='text-smoke hover:text-hover-smoke duration-150'>Reservation</Link>
          <Link href='/branches' className='text-smoke hover:text-hover-smoke duration-150'>Branches</Link>
          <Link href='/menu/Beef' className='text-smoke hover:text-hover-smoke duration-150'>Menu</Link>
          <Link href='#contact' className='text-smoke hover:text-hover-smoke duration-150'>Contact</Link>
        </div>

        <div className="flex justify-end me-4 gap-2 my-3 text-xs sm:text-sm">
          <i className="fa-brands fa-instagram text-golden hover:text-smoke duration-300"></i>
          <i className="fa-brands fa-facebook text-golden hover:text-smoke duration-300"></i>
          <i className="fa-brands fa-whatsapp text-golden hover:text-smoke duration-300"></i>
        </div>
      </nav>

    </>
  )
}

export default Header