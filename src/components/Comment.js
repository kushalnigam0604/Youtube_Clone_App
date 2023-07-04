import React from 'react'

const Comment = ({data}) => {
    const {name , text} = data;
  return (
    <div className='flex shadow-md bg-gray-100 p-2 my-1 rounded-lg'>
    <img
          className="w-10 h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9tpT4I8IfwZouXLJMqWz-_dDSSDkTfuMl6xIN0M&s"
          alt="user"
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment
