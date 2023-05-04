import React from 'react'

const AddBlogsModal = ({
    modalType
}) => {
    console.log(modalType)
  return (
    <div className='w-full bg-red-200'>
        {
            modalType === 'Add Blogs' ? <div>Add BLog</div> : <div>Edit Blog</div>
        }
    </div>
  )
}

export default AddBlogsModal