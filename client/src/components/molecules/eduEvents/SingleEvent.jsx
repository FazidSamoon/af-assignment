import Image from 'next/image'
import React from 'react'

const SingleEvent = ({
  event
}) => {
  return (
    <div className="flex flex-col mx-2 my-4">
      <Image
        src={event?.image}
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 flex flex-col">
        <span className="text-xl font-bold mb-2">
          {event?.title}
        </span>
        <span className='text-lg font-bold'>{event?.description}</span>
        <span className='mt-2 text-base font-semibold'>by {event.speaker}</span>
        <span className="mt-2 text-base font-semibold">from {event.time}</span>
        <span className="mt-2 text-base font-semibold">at {event.venue}</span>
      </div>
    </div>
  )
}

export default SingleEvent