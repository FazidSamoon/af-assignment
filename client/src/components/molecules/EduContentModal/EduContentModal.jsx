import React from 'react'

import AddBlogsModal from '../eduBlogs/AddBlogsModal';

const EduContentModal = ({
    modalType
}) => {
  return (
    <div className='absolute m-auto left-0 right-0 w-full h-full backdrop-blur-sm  px-12 py-12'>
        <AddBlogsModal modalType={modalType} />
    </div>
  )
}

export default EduContentModal