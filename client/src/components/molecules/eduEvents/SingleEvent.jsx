import Image from 'next/image'
import React from 'react'

const SingleEvent = () => {
  return (
    <div className="flex flex-col mx-2 my-4">
      <Image
        src="/eduEmpowernment.jpg"
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 flex flex-col">
        <span className="text-lg font-bold mb-2">
          Growing Healthy Thriving Minds of the Next Generation
        </span>
        <span className='text-base font-semibold'>by Fazid Samoon</span>
        <span className="mt-2 text-base font-semibold">from 12:00pm to 1:00pm</span>
        <span className="mt-2 text-base font-semibold">at 1234 Street, City, State, Country</span>
      </div>
    </div>
  )
}

export default SingleEvent