import React from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'


function TodoForm() {
  const { addTodo, setModalOpen} = React.useContext(TodoContext)
  const [newWish, setNewWish] = React.useState('')

  const onChangeTextArea = (event) => {
    setNewWish(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newValue = {
      text: newWish,
      id:Date.now(),
      completed:false
    }
    addTodo(newValue)
    setModalOpen(false)
  }

return (
    <form className='modalform' onSubmit={(event)=>onSubmit(event)}>
      <label className='title'>Crear una nueva Task</label>
      <textarea value={newWish} onChange={(e)=>onChangeTextArea(e)} maxLength={228} className='whishContent' placeholder='Escribe tu nueva task aqui'></textarea>
      <button className='cloudSubmit' type='submit'>Añadir</button>
    </form>

  )
}

export default TodoForm