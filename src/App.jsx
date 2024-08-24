import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {



  return (
    <div className='parent-container font-serif bg-slate-600 h-screen  flex  items-center justify-center'>
      <div className="child-container w-96 bg-neutral-300 h-5/6 rounded-md ">
      <h1 className='text-3xl flex  justify-center font-serif p-4'>ToDo-App</h1>


      <TodoInput />
     
   


  <div className=' flex justify-center p-2'>
  <button className='text-xl text-white hover:bg-slate-900 rounded-md p-1'><span>CHECK LIST</span></button>
  </div>
      </div>
    
    </div>
  )
}

export default App
