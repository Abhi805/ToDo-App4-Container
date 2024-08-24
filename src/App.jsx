import React from 'react'
import TodoInput from './components/TodoInput'


const App = () => {



  return (
    <div className='parent-container font-serif bg-slate-600 h-screen  flex  items-center justify-center'>
      <div className="child-container w-96 bg-neutral-300 h-5/6 rounded-md ">
      <h1 className='text-3xl flex  justify-center font-serif p-4'>ToDo-App</h1>


      <TodoInput />
     
   



      </div>
    
    </div>
  )
}

export default App
