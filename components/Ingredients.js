import React, { useLayoutEffect, useRef, useState } from 'react'

const Ingredients = (props) => {

  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 } = props.meal[0]
  const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6]

  const myDiv = useRef(), imgDiv = useRef()
  const [width, setWidth] = useState(0)


  useLayoutEffect(() => {
    setWidth(imgDiv.current.clientWidth)
  })

  const carousel = myDiv.current, imgWidth = width

  const scrollRight = () => {
    carousel.scrollLeft += (imgWidth + 40)
  }
  const scrollLeft = () => {
    carousel.scrollLeft -= (imgWidth + 40)
  }

  return (
    <>
    <div className='flex justify-center my-5 sm:my-10'>
    <div className="flex flex-col text-center relative w-full lg:w-3/4 bg-transparent px-2 lg:px-5 rounded font-jaldi text-smoke">  
        {/* Left Arrow */}
        <i onClick={()=>scrollLeft()} className="hidden lg:block absolute top-1/2 -left-2 -translate-y-1/2 fa-solid fa-caret-left text-4xl hover:text-hover-smoke cursor-pointer"></i>

        <h2 className="font-jockey text-lg mt-3 mb-6 sm:text-2xl sm:mb-8 sm:mt-12 lg:mt-5">Ingredients</h2>
        {/* Ingredient Slider */}
        <div ref={myDiv} className="flex gap-10 overflow-x-auto overflow-y-hidden scroll-smooth pb-4" style={{scrollbarWidth: 'thin'}}>
            {
              ingredients.map(ingredient=>(
                <div key={ingredient.length} ref={imgDiv} className="flex flex-col flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/6 items-center">
                  <img className='rounded' src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt="" />
                  <h3 className='font-jaldi text-smoke mt-1 text-xs sm:text-sm'>{ingredient}</h3>
                </div>
              ))
            }
        </div>

        {/* Right Arrow */}
        <i onClick={()=>scrollRight()} className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 fa-solid fa-caret-right text-4xl hover:text-hover-smoke cursor-pointer"></i>
    </div>
    </div>
    </>
  )
}

export default Ingredients