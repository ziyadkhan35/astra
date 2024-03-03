import React from 'react'
import Branch from './Branch'
import { useSelector } from 'react-redux'

const Branches = () => {

    const branch = useSelector(state => state.branch.branches)

  return (
    <>
    <div className="flex flex-col font-jockey text-smoke mt-12 sm:mt-28">
        {/* Header */}
        <div className="flex flex-col ms-2 sm:ms-5 lg:ms-10 mb-4 md:mb-8 gap-1">
            <h1 className='text-xl md:text-3xl lg:text-5xl'>Branches</h1>
            <h3 className='text-sm md:text-md lg:text-xl text-golden'>Astra Restaurants: Where Gastronomy Soars</h3>
        </div>

        {/* Branches */}
        <div className="flex flex-col gap-3">
            { 
                branch.map((branch)=>(
                    <div key={branch.id}>
                    <Branch
                        name={branch.name} 
                        number={branch.number} 
                        address={branch.address} 
                        stars={branch.stars}
                        description={branch.description}
                        distanceFromCenter={branch.distanceFromCenter}
                        image={branch.image}
                    />
                    </div>
                ))
            }
        </div>
        
        <p className='text-center mt-6 md:text-xl font-italianno text-golden'>Explore the heights of gastronomic excellence at Astra Restaurants, where every branch is a culinary destination unto itself.</p>
    </div>
    </>
  )
}

export default Branches