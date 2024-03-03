import React, { useRef, useState } from 'react'

const Reserv = () => {

    const [restaurant, setRestaurant] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState('')

    const confirm = () => {
        if(restaurant.length==0 || date.length==0 || time.length==0 || numberOfPeople.length==0){
            alert('Please fill in all the boxes!')
        }else{
            alert(`
            Reservation Confirmation:

            Thank you for choosing ${restaurant}!

            Date: ${date}
            Time: ${time}
            Number of People: ${numberOfPeople}

            We look forward to serving you! `)
        }
    }
    
  return (
    <>
    <div className="flex flex-col bg-neutral-200">
        <div className="relative">
            <div className="bg-black h-96">
                <img className='object-cover h-full w-full opacity-65' src="/reservation/reservation.jpg" alt="" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-smoke w-full">
                <div className="relative flex flex-col items-center">
                    <h3 className='font-italianno text-5xl sm:text-7xl lg:text-8xl text-golden'>Make a</h3>
                    <h5 className='font-jockey text-2xl lg:text-4xl border-b-2 absolute top-1/3 sm:top-1/2'>Reservation</h5>
                    <h6 className='font-jaldi sm:text-lg lg:text-xl mt-4'>Savor Celestial Flavors at Astra</h6>
                </div>
            </div>
        </div>

        <div className="flex flex-col font-jaldi items-center pt-10 pb-4 text-gray-950">
            <div className="flex flex-col items-center mb-8">
                <h3 className='font-jockey text-lg sm:text-2xl text-center'>Make online reservation</h3>
                <h5 className=' text-xs sm:text-sm text-center'>Please select the date, time and number of people</h5>
            </div>

            <div className="flex flex-col items-center sm:text-lg font-jaldi">
                <div className="flex mb-4">
                    <select className={restaurant.length !==0 ? 'rounded py-1 px-2' : 'rounded py-1 px-2 border border-red-700'} onChange={(e)=>setRestaurant(e.target.value)}>
                        <option value="">Restaurant</option>
                        <option value="Astra Downtown">Astra Downtown</option>
                        <option value="Astra Riverside">Astra Riverside</option>
                        <option value="Astra Hilltop">Astra Hilltop</option>
                        <option value="Astra Seaside">Astra Seaside</option>
                    </select>
                </div>

                <div className="flex gap-4 flex-col sm:flex-row">
                    <input onChange={(e)=>setDate(e.target.value)} className={date.length !==0 ? 'rounded py-1 px-2' : 'rounded py-1 px-2 border border-red-700'} type="date" />
                    <input onChange={(e)=>setTime(e.target.value)} className={time.length !==0 ? 'rounded py-1 px-2' : 'rounded py-1 px-2 border border-red-700'} type="time" />
                    <input onChange={(e)=>setNumberOfPeople(e.target.value)} className={numberOfPeople.length !==0 ? 'rounded py-1 px-2' : 'rounded py-1 px-2 border border-red-700'} type="number" min={1} max={12} placeholder='Number of people' />
                </div>
            </div>

            <div className=''>
                <button className='py-1 sm:px-10 px-16 mt-10 bg-gray-950 text-smoke rounded-sm sm:text-lg' onClick={()=>confirm()}>Confirm</button>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Reserv