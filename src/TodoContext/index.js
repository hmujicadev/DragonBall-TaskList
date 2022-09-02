import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {
  const[intervalActive,setIntervalActive] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)
  const [callShenlong, setCallShenlong] = React.useState(false)
  const [comment, setComment] = React.useState({})
  const [filteredTodos, setfilteredTodos] = React.useState([])
  const { item:todos, saveItem:saveTodos, error,loading,setLoading} = useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo => todo.completed === true ).length;
  const totalTodos = todos.length
  let timeout
 
  React.useEffect(() => {
    if (searchValue.length >= 1) {
      setfilteredTodos ( todos.filter(todo => {
        const searchText = searchValue.toLowerCase();
        const todoText = todo.text.toLowerCase();
        return todoText.includes(searchText)
    }))
  } else {
    setfilteredTodos(todos)
  }
  }, [searchValue, todos])
  
  const activeComment = (imagen) => {
    setIntervalActive(true)
      setComment({ message: imagen, active: true })
  
    if (!intervalActive) {
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        setComment({ ...comment, active: false })
        setIntervalActive(false)
      }, 5000)
      
    } else {
      setComment({ message: imagen, active: true })
    }
    }
  
    
  
const addTodo = (newTodo) => {
    const newTodos = [...todos]
    newTodos.push(newTodo)
    saveTodos(newTodos)
}
const toggleCompleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo=> todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
}
const deleteTodo = (id) => {
 const todoIndex = todos.findIndex(todo=> todo.id === id)
 const newTodos = [...todos]
  newTodos.splice(todoIndex, 1)
  saveTodos(newTodos)
  }
  
  return (
    <TodoContext.Provider value={{
      todos,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      deleteTodo,
      toggleCompleteTodo,
      filteredTodos,
      error,
      modalOpen,
      setModalOpen,
      addTodo,
      loading,
      setLoading,
      comment,
      activeComment,
      callShenlong,
      setCallShenlong
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}