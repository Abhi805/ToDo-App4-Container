import React from 'react'

const TodoInput = () => {
  return (
    <div className="input-container font-serif justify-center flex">
      <input
    
        className="rounded-md w-64 h-8 text-center"
        type="text"
        placeholder="Type Your Todo Here"
        />
         <button
      
      className="bg-orange-600 font-semibold  hover:bg-slate-950 ml-2 rounded-md px-2 text-white ">
    
      Add
    </button>
    
    </div>
   
  )
}

export default TodoInput
