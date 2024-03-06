import React from 'react'

const Branch = (props) => {
    const { image, stars, name, address, description, distanceFromCenter, number } = props
  return (
    <>
    <div className="group flex text-smoke font-jaldi relative h-80 overflow-hidden sm:mx-5 lg:mx-10">
        {/* Images */}
        <img className='w-full h-full object-cover' src={image} alt="" />
        {/* Deatails */}
        <div className="w-full flex flex-col absolute -bottom-28 px-2 sm:px-5 group-hover:bottom-0 duration-300 bg-gradient-to-t from-black to-transparent">
            {/* Stars */}
            <p className='text-xl md:text-3xl'>{stars}</p>

            {/* Name and Address */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-14 mt-2">
                <h3 className='text-xl md:text-3xl lg:text-5xl font-jockey'>{name}</h3>
                <p className='text-xs md:text-xl font-jockey'>{address}</p>
            </div>

            {/* Description and Distance from Center*/}
            <div className="flex flex-col lg:w-2/3 pb-2 gap-1 text-xs md:text-md mb-2">
                <p><span className='font-bold'>Description:</span> {description}</p>
                <p><span className='font-bold'>Distance from Center:</span> {distanceFromCenter}</p>
                <p><span className='font-bold'>Contact Number:</span> {number}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Branch