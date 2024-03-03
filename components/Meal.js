import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'

const Meal = (props) => {
    const router = useRouter()
    const { strMeal, strInstructions, strMealThumb, strArea } = props.meal[0]
  return (
    <>
    <div className="flex flex-col text-smoke items-center font-jaldi mt-24 rounded-sm">
        <div className="flex flex-col items-center">
            <h1 className='font-jockey text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Meal Details</h1>
            <p className='font-jaldi tracking-wide text-gray-300 mb-5 text-sm sm:text-base'>Click <Link className='underline hover:text-hover-smoke' href={'/menu/Beef'}>here</Link> to view the menu</p>
        </div>

        <div className="flex flex-col items-center w-full">
            {/* Meal image */}
            <img className='sm:h-60 h-56 lg:w-3/4 w-full object-cover' src={strMealThumb} alt="" />

            {/* Meal description */}
            <div className="flex flex-col bg-gray-300 text-gray-950 w-full lg:w-3/4 p-2 lg:p-5 gap-2">
                <h3 className='sm:text-xl text-lg font-jockey'>{strMeal}</h3>
                <p className='max-h-28 sm:max-h-36 overflow-y-auto sm:py-1 pe-5 text-sm sm:text-base'><span className='font-bold'>Instructions: </span>{strInstructions}</p>
                <h2 className='text-sm sm:text-base py-1'><span className='font-bold'>Area: </span>{strArea}</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Meal