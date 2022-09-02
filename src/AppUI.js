import React from "react";
import { TodoCounter } from "./components/ToDoCounter/TodoCounter";
import { TodoSearch } from "./components/ToDoSearch/TodoSearch";
import { TodoItem } from "./components/ToDoItem/TodoItem";
import { TodoList } from "./components/ToDoList/TodoList";
import { TodosError } from "./components/ToDoError";
import { TodosLoading } from "./components/ToDoLoading";
import { MessageTodo } from "./components/MessageTodo";
import logo from "./images/logo.png"
import Wish from "./images/wish.png"
import List from "./images/list.png"
import { TodoContext } from "./TodoContext";
import { Modal } from "./components/Modal";
import TodoForm from "./components/ToDoForm/TodoForm";


function AppUI() {
  const[firstLoad,setFirstLoad] = React.useState(true)
  const { deleteTodo, error, toggleCompleteTodo, filteredTodos, loading, comment, activeComment } = React.useContext(TodoContext)
  

  React.useEffect(() => {
    console.log(filteredTodos)
    if (!filteredTodos.length && !firstLoad) {
      activeComment('comentario3')
      setFirstLoad(false)
    }
  }, [filteredTodos])
  React.useEffect(() => {
    activeComment('comentario1')
    setFirstLoad(true)
  }, [])
  return (
    <>
    {comment.active && <MessageTodo />}
    <div className="mainContainer">
      <div className="listContainer">
        <img alt='Logo' className='imageLogo' src={logo} />
        <div className='formHeaderWrap'>
          <img className='listLogo' alt='Wish' src={Wish} />
          <img className='taskLogo' alt='List' src={List} />
        </div>
        <TodoCounter/>
        <TodoSearch />

        <TodoList>
            {error && <TodosError/>} 
            {loading && <TodosLoading/>}
            {filteredTodos.map((todo,index) => (
              <TodoItem key={todo.id} onDeleteTodo={()=>deleteTodo(todo.id)} togglecompleted={()=>toggleCompleteTodo(todo.id)} id={todo.id} completed={todo.completed} index={index} text={todo.text} />
            ))}
        </TodoList> 
          <Modal><TodoForm /></Modal>
        </div>
      </div>
      </>
  );
}

export { AppUI };
