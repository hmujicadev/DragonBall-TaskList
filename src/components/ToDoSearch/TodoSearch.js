import React from 'react'
import './TodoSearch.css'
import kilen from '../../images/kiLen.png'
import { CreateTodoButton } from '../CreateToDoButton/CreateTodoButton'
import { TodoContext } from '../../TodoContext'

function TodoSearch() {
  const { searchValue, setSearchValue,setModalOpen,activeComment } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  const activateSpeech = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start()
    setTimeout(() => {
      recognition.stop()
    },10000)
    recognition.onresult = (event)=> {
      const resultado = event.results[0][0].transcript
      if (resultado.includes('nube voladora')) {
        setModalOpen(true)
      }
    }
    
    recognition.onerror = function(event) {
      console.log('Parece que hay un problema, intenta activar el microfono: ' + event.error)
    }
  
  }

  return (
    <div key={1} className='todoSearchContainer'>
      <input onMouseEnter={()=>activeComment('comentario5')} value={searchValue} onChange={onSearchValueChange} className='inputSearch' placeholder="Buscador de tasks" />
      <img onMouseUp={()=>activeComment('comentario7')} onMouseEnter={()=>activeComment('comentario2')} title='Activar comando de voz' onClick={activateSpeech} style={{ marginRight:'10px'}} className='searchIcon' src={kilen} alt='Search' />
      <CreateTodoButton  />
    </div>
  )
}

export { TodoSearch }