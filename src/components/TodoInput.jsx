import React, { useState } from 'react'
import TodoList from './TodoList';

const TodoInput = () => {

const [inputText,setInputText] = useState('');

const [todo,setTodo] = useState([]);

const addTodo =()=>{
  if(inputText!=="")
  setTodo([...todo,inputText]);
  setInputText('');
}

  return (
   <>
    <div className="input-container font-serif justify-center flex">
      <input
    
        className="rounded-md w-64 h-8 text-center"
        type="text"
        placeholder="Type Your Todo Here"
        onChange={(e)=> setInputText(e.target.value)}
        value={inputText}
        />
         <button
      
     className="bg-orange-600 font-semibold  hover:bg-slate-950 ml-2 rounded-md px-2 text-white "
     onClick={addTodo}
     >
 
    
      Add
    </button>
   
    </div>
    <h2 className='m-2 ml-10 text-2xl'>Todos</h2>
    <hr />

    <div className='show-todo'>
    {
      todo.map((element,index)=>{
        return(
          <ul className="list-none font-serif border-2  border-slate-600 mt-4 ml-8 bg-neutral-300 rounded-md w-80 h-8 text-lg">
    <li className='ml-2 capitalize'>
   {element}
    <span  className='float-right  mr-2 cursor-pointer hover:text-xl'><i class="fa-solid fa-trash-can icon-delete"></i></span>
    </li>
  </ul>
        )

      })
    }



  </div>

   </>
   
  )
}

export default TodoInput
