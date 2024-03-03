import React from 'react'

const Most = (props) => {
  return (
    <>
    <div className="flex flex-col px-10 mx-10 mt-10">
        <h2 className='font-jockey text-smoke text-xl mb-6'>Most {props.header}</h2>
        <div className="grid grid-cols-3 grid-flow-row">
            <div className="flex flex-col">
                <img className='object-cover w-full h-36 rounded-tl-md' src="/gallery2.jpg" alt="" />
                <div className="flex flex-col bg-smoke rounded-bl-md ps-4 py-2">
                    <h2 className='font-jockey text-xl'>Salmon Eggs</h2>
                    <p className='font-jaldi text-gray-800'>First make the Hollandaise sauce.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Most