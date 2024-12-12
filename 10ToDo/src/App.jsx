import React, { useEffect} from "react"
import { Todoprovider } from "./Context"
import { useState } from "react"
import TodoForm from "./Components/TodoForm"
import TodoItem from "./Components/TodoItem"

function App() {
  const [todos,setTodos]=useState([])
  //here todos is an array

  const addTodo=(todo)=>{
    // setTodos(todo) if we do like this then all prev todos will be delete after adding the new 
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }
  /* What is the Spread Operator (...)?
  The spread operator (...) is a JavaScript feature that allows you to "spread out" elements of an array, object, or iterable into individual elements.
  In this case, ...prev spreads the elements of the prev array into a new array.*/

  const updatedTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((eachValue)=>(eachValue.id===id?todo:eachValue)))
    /*here to update todo we need to find the id first for that we traverse the array of todos object using map where a callback is come and we check whether the id of prevTodo is equal to id which we want to or not . If true then we add new add todo else remain the old todo content */
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    /*filter is a JavaScript array method that creates a new array containing only the elements that satisfy a specific condition.
    In this case, the condition is: todo.id !== id.
    This means "keep all todos whose id is not equal to the given id. */
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((eachValue)=>eachValue.id===id?{...eachValue,completed: !eachValue.completed}:eachValue))
  }

  /*Suppose we have allready todos in local storage when we render the page again that should be visible for that we have to take the todos from local storage and put them in todos (useState) for that we will use useEffect */

  //in local storage data store in String format we have to convert it into json
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
 
  //Local Storage read mdn


  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
