import React from 'react'
import comment1 from '../../images/com-1.png'
import comment2 from '../../images/com-2.png'
import comment3 from '../../images/com-3.png'
import comment4 from '../../images/com-4.png'
import comment5 from '../../images/com-5.png'
import comment6 from '../../images/com-6.png'
import comment7 from '../../images/com-7.png'
import comment8 from '../../images/com-8.png'
import comment9 from '../../images/com-9.png'
import { TodoContext } from '../../TodoContext'
import './MessageTodo.css'


function MessageTodo() {
  const { comment } = React.useContext(TodoContext)
  const comments = {
    comentario1: comment1,
    comentario2: comment2,
    comentario3: comment3,
    comentario4: comment4,
    comentario5: comment5,
    comentario6: comment6,
    comentario7: comment7,
    comentario8: comment8,
    comentario9: comment9,
  }
  return (
    <div className='messageContainer'>
      <img src={comments[comment.message]} width='100%' alt={'mensaje de goku'} />
    </div>
  )
}

export {MessageTodo}