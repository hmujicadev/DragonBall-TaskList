import React from 'react'
import ball1 from '../../images/ball1.png'
import ball2 from '../../images/ball2.png'
import ball3 from '../../images/ball3.png'
import ball4 from '../../images/ball4.png'
import ball5 from '../../images/ball5.png'
import ball6 from '../../images/ball6.png'
import ball7 from '../../images/ball7.png'
import './TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { TodoContext } from '../../TodoContext'

const sphereImages = {1:ball1,2:ball2,3:ball3,4:ball4,5:ball5,6:ball6,7:ball7}

function TodoItem(props) {
  const { activeComment } = React.useContext(TodoContext);
  return (
    <li className='item'>
      <img onMouseUp={()=>activeComment('comentario9')} onMouseEnter={()=>activeComment('comentario6')} onClick={props.togglecompleted} style={{cursor:'pointer'}} height={'80px'} alt={'sphere'} src={sphereImages[props.index + 1]} />
      <div className='itemText'>
        <p style={{textDecoration:props.completed?'line-through':'none'}}>{props.text}</p>
        <FontAwesomeIcon onClick={props.onDeleteTodo} icon={faTimes} style={{color:'black', marginRight:'20px',cursor:'pointer'}} size='1x' pull='right' />
      </div>
    </li>
  )
}

export { TodoItem }