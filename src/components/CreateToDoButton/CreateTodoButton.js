import React from 'react'
import Radar from '../../images/radar.png'
import { TodoContext } from '../../TodoContext';
import './CreateTodoButton.css';
import radarSound from '../../sounds/radar.mp3'

function CreateTodoButton() {
  const { setModalOpen,activeComment,totalTodos } = React.useContext(TodoContext)
  const audioTag = React.useRef();
  const onClickButton = () => {
    
    audioTag.current.play()
    if (totalTodos < 7) {
      setModalOpen(true)
    } else {
      activeComment('comentario8')
    }
  }

  return (
    <>
      <img
        onMouseEnter={()=>activeComment('comentario4')}
      className='radarButton'
      onClick={onClickButton}
      src={Radar}
      alt={'radar'}
    />
      <audio ref={audioTag} src={radarSound} type='audio/mpeg' />
    </>
  )
}

export { CreateTodoButton }