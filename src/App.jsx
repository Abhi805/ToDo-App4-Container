import React from 'react'
import TodoInput from './components/TodoInput'

const App = () => {
  return (
    <div className='parent-container font-serif bg-slate-600 h-screen  flex  items-center justify-center'>
      <div className="child-container  w-96 bg-neutral-300 h-5/6 rounded-md ">
      <h1 className='text-3xl flex  justify-center font-serif p-4'>ToDo-App</h1>
      <TodoInput />
      <h1 className="m-4 ml-10 text-xl">TODOS</h1>
      < hr/>


      <ul className="list-none font-serif border-2  border-slate-600 mt-4 ml-8 bg-neutral-300 rounded-md w-80 h-8 text-lg">
      <li className='ml-2 capitalize'>
        <span  className='float-right  mr-2 cursor-pointer hover:text-xl'><i class="fa-solid fa-trash-can icon-delete" title='Delete'></i></span>
      </li>
    </ul>
      </div>

    </div>
  )
}

export default App
