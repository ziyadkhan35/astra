import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-row mt-14 sm:mt-20 sm:px-5 lg:px-10 gap-10 items-center">
        {/* Paragraph */}
        <div className="flex flex-col basis-1/3 px-2 items-center sm:items-start">
            <div className="flex flex-col font-italianno items-center sm:items-start">
                <h2 className='text-xl md:text-3xl lg:text-6xl text-golden mb-2 sm:mb-4'>
                    Astra: Where Every Meal Shines Bright
                </h2>
                <p className='text-smoke text-sm md:text-lg lg:text-2xl tracking-wide text-center sm:text-start'>
                    Indulge in our culinary masterpiece – a symphony of flavors meticulously crafted to tantalize your taste buds. Each dish tells a story of passion and dedication, inviting you to embark on a culinary journey unlike any other.
                    Immerse yourself in the warm glow of our enchanting ambiance, where every detail is thoughtfully curated to elevate your dining experience. From intimate candlelit tables to chic modern decor, discover the perfect setting for your memorable moments.
                </p>
            </div>
            <div className="flex items-center mt-3 sm:mt-6 text-xs md:text-sm lg:text-base">
                <a href='/'><i className="fa-brands fa-instagram text-smoke hover:text-hover-smoke"></i></a>
                <p className='font-jaldi text-smoke ms-2 italic'>Follow us on instagram: <a href="/" className='underline hover:text-hover-smoke'>theastra</a></p>
            </div>
        </div>

        {/* Gallery */}
        <div className="flex basis-2/3">
            <div className="grid grid-rows-4 grid-flow-col gap-2">
                <div className="bg-gray-300 row-span-3"><img className='object-cover w-full h-full' src="/gallery/gallery0.jpg" alt="" /></div>
                <div className="bg-gray-300"><img className='object-cover w-full h-full' src="/gallery/gallery1.jpg" alt="" /></div>
                <div className="bg-gray-300"><img className='object-cover w-full h-full' src="/gallery/gallery2.jpg" alt="" /></div>
                <div className="bg-gray-300 row-span-3"><img className='object-cover w-full h-full' src="/gallery/gallery3.jpg" alt="" /></div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Gallery