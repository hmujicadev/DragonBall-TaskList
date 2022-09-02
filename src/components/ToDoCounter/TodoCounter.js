import React from 'react'
import { TodoContext } from '../../TodoContext'

function TodoCounter() {
  const { totalTodos, completedTodos, setCallShenlong, setModalOpen,filteredTodos } = React.useContext(TodoContext)
  React.useEffect(() => {
      if (totalTodos === 7 && completedTodos === 7) {
        setCallShenlong(true);
        setModalOpen(true)
      }
  },[filteredTodos])

  return (
    <span style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Has completado {completedTodos} de {totalTodos} task{(totalTodos > 1) && 's'}</span>
  )
}

export { TodoCounter }