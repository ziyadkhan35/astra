import React from 'react'

const Collage = () => {
  return (
    <>
    <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-2 grid-flow-col mt-24 sm:mt-32 sm:mx-5 lg:mx-10 text-smoke font-jaldi">
        
        {/* Text */}
        <div className="flex flex-col px-4 items-center justify-center order-2">
            <h3 className='font-jockey text-lg mb-4'>Sweet Serendipity</h3>
            <div className="flex flex-col sm:w-3/4 items-center">
                <h4 className='text-golden mb-1 text-center text-sm lg:text-md'>Desserts as Delightful Sonnets</h4>
                <p className='text-xs lg:text-sm text-center'>Complete your epicurean journey with our divine desserts, where sweetness meets symphony in a crescendo of decadence.</p>
            </div>
        </div>
        <div className="flex flex-col px-4 items-center justify-center order-4 md:order-3">
            <h3 className='font-jockey text-lg mb-4'>Aromatic Ambrosia</h3>
            <div className="flex flex-col sm:w-3/4 items-center">
                <h4 className='text-golden mb-1 text-center text-sm lg:text-md'>The Essence of Tea and Coffee</h4>
                <p className='text-xs lg:text-sm text-center'>Indulge in the rich melodies of our brewed perfection, where each sip dances on your palate like a sonnet.</p>
            </div>
        </div>
        <div className="flex flex-col px-4 items-center justify-center order-6">
            <h3 className='font-jockey text-lg mb-4'>Gastronomic Gems</h3>
            <div className="flex flex-col sm:w-3/4 items-center">
                <h4 className='text-golden mb-1 text-center text-sm lg:text-md'>An Ode to Dishes</h4>
                <p className='text-xs lg:text-sm text-center'>Embark on a culinary voyage where every dish is a verse in a savory saga.</p>
            </div>
        </div>

        {/* Image */}
        <div className="relative order-3 md:order-4">
            <img src="/collage/collageDessert.jpg" alt="" />
        </div>
        <div className="relative order-5">
            <img src="/collage/collageTea.jpg" alt="" />
        </div>
        <div className="relative order-1">
            <img src="/collage/collageDish.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default Collage