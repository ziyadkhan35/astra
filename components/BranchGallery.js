import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const BranchGallery = () => {
    useEffect(()=>{
      // Set description botton position
      setHeightDes(-description.current.offsetHeight + 'px')
      // Set image div width
      setWidthContainer(container.current.offsetWidth)
    })
   
    const branches = useSelector(state=>state.branch.branches)
    // Toggle Description
    const description = useRef(), moveDiv = useRef()
    const [heightDes, setHeightDes] = useState()
    const [see, setSee] = useState(false)

    const myStyle = {
      bottom: heightDes,
    }
    const toggleDesc = () => {
      see ? setSee(false) : setSee(true)
    }

    // Branch Slider
    const container = useRef()
    const [widthContainer, setWidthContainer] = useState()
    
    const scrollLeft = () => {
      container.current.scrollLeft -= widthContainer
    }
    const scrollRight = () => {
      container.current.scrollLeft += widthContainer
    }

  return (
    <>
    <div ref={container} className='flex overflow-hidden'>
      {branches.map(branch=>(
        
        <div key={branch.id} className="relative overflow-hidden bg-black flex-shrink-0 w-full">
          <img className='w-full object-cover h-screen -z-10 opacity-70' src={branch.image} alt="" />
          
          <button onClick={()=>scrollLeft()} className={see ? 'hidden absolute left-0 top-1/2 ms-10' : 'absolute left-0 top-1/2 ms-10'}><i className="fa-solid fa-chevron-left text-6xl text-smoke"></i></button>
          <button onClick={()=>scrollRight()} className={see ? 'hidden absolute right-0 top-1/2 me-10' : 'absolute right-0 top-1/2 me-10'}><i className="fa-solid fa-chevron-right text-6xl text-smoke"></i></button>

          <div ref={moveDiv} className="flex flex-col absolute w-full duration-300" style={see ? {bottom: 0} : myStyle}>
            <div className="flex justify-center">
              <Link href={'/reservation'} className='font-jockey border-2 py-2 px-8 text-2xl rounded bg-smoke text-body hover:text-smoke hover:bg-transparent duration-300 tracking-wide'>RESERV</Link>
            </div>

            <div className="flex flex-col text-smoke px-10 font-jaldi bg-gradient-to-t from-black to-transparent">
              <div className="flex flex-col items-center mt-5">
                <button onClick={()=>toggleDesc()} className='text-xl'><i className={see ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i></button>
                <h3 className='text-5xl mb-6 font-jockey'>{branch.name}</h3>
              </div>
              
              <div ref={description} className="flex flex-col items-center">
                <p className='text-center'><span className='font-bold'>Location: </span> {branch.address}</p>
                <p className='text-center'><span className='font-bold'>Stars: </span> {branch.stars}</p>
                <p className='text-center'><span className='font-bold'>Descriprtion: </span> {branch.description}</p>
                <p className='text-center'><span className='font-bold'>Distance from center: </span> {branch.distanceFromCenter}</p>
              </div>
            </div>
          </div>
        </div>

      ))}
    </div>
    </>
  )
}

export default BranchGallery