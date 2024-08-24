import React from 'react'

const TodoList = () => {
  return (
    <ul className="list-none font-serif border-2  border-slate-600 mt-4 ml-8 bg-neutral-300 rounded-md w-80 h-8 text-lg">
    <li className='ml-2 capitalize'>{props.item}
      <span onClick={e=>{
        props.deleteItem(props.index)
      }} className='float-right  mr-2 cursor-pointer hover:text-xl'><i class="fa-solid fa-trash-can icon-delete"></i></span>
    </li>
  </ul>
  )
}

export default TodoList
