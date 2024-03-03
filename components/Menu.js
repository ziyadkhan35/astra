import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Menu = (props) => {
    const router = useRouter()

  return (
    <>
    <div className="flex flex-col items-center text-smoke relative">
        <div className="bg-black absolute -z-10 h-full w-full">
            <img className='opacity-40 h-full w-full object-cover' src="/background/backgroundMenu.jpg" alt="" />
        </div>
        <h1 className='font-jockey text-xl mb-6 md:text-4xl lg:text-6xl mt-24'>Our Menu</h1>

        <div className="flex flex-col items-center font-jaldi mb-6">
            <p className='text-sm mb-2'>Please select a category</p>

            {/* Categories */}
            <select onChange={(e)=> router.push(e.target.value)} className='px-6 text-xl text-body rounded-sm outline-none' name="" id="">
                <option value="Beef" className=''>Category</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Lamb">Lamb</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Seafood">Seafood</option>
                <option value="Side">Side</option>
                <option value="Starter">Starter</option>
                <option value="Pasta">Pasta</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Goat">Goat</option>
            </select>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3 border font-jaldi w-3/4 text-lg px-5 py-3 mb-5 h-96 overflow-auto">
            
                {/* Name and Price */}
                {props.data.meals.map((meal)=>(  
                <div key={meal.idMeal} onClick={()=>router.push(`/meal/${meal.strMeal}`)} className="flex flex-col border-b border-dashed cursor-pointer hover:opacity-70 p-1">
                    <div className="flex justify-between">
                    <span className=''>{meal.strMeal}</span>
                    <span className=''>- $5.99</span>
                    </div>
                </div>
                ))}
            
        </div>

        {/* More detail link */}
        <p className='font-jaldi text-golden mb-10 text-lg'>Click on the food for more details</p>
    </div>
    </>
  )
}

export default Menu