import React, { useState } from "react";
import { useTodo } from "../Context";
function TodoForm() {
  const[todo,setTodo]=useState("")
  const {addTodo}=useTodo()

  const add=(e)=>{
    e.preventDefault()

    if(!todo) return
    addTodo({todo:todo,completed:false})
    /*since in addTodo function we are spreading a obj so we need to pass an object id is generating in the function so no need to pass here*/
    setTodo("")
  }

  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;

