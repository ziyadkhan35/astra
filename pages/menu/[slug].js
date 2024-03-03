import Menu from '@/components/Menu';
import Test from '@/components/test';
import React from 'react'

const menu = ({data}) => {

  return (
    <>
      <Menu data = {data}/>
    </>
  )
}

export default menu
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.slug}`)
  const data = await res.json()

  return { props: { data } }
}