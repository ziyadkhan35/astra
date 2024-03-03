import Ingredients from '@/components/Ingredients'
import Meal from '@/components/Meal'
import React from 'react'

const meal = ({data}) => {
  return (
    <>
    <Meal meal={data.meals} />
    <Ingredients meal={data.meals} />
    </>
  )
}

export default meal
export const getServerSideProps = async (context) => {
    // Meals
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${context.params.slug}`)
    const data = await res.json()

    return { props: { data } }
}