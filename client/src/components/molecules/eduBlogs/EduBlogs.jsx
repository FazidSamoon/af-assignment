import React from 'react'
import SingleBlog from './SingleBlog'

const EduBlogs = () => {
  return (
    <div className='mt-16'>
        <div className='flex flex-col'>
            <span className='text-2xl font-bold'>Here are some blogs that you might find interesting</span>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
                <SingleBlog />
            </div>
        </div>
    </div>
  )
}

export default EduBlogs