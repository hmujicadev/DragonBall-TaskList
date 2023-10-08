import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../../TodoContext';
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Cloud from '../../images/cloud.png'
import cloudSound from '../../sounds/cloudSound.mp3'


function Modal({ children }) {
  const audioTag = React.useRef();
  const { modalOpen, setModalOpen,totalTodos,activeComment,setCallShenlong,callShenlong } = React.useContext(TodoContext)
  const [closingModal, setClosingModal] = React.useState(false)

  const closeModal = () => {
    setClosingModal(true)
    setCallShenlong(false)
    setTimeout(() => {
      setModalOpen(false)
      setClosingModal(false)
    },500) 
  }

  const closeVideoModal = () => {
    setCallShenlong(false)
    setModalOpen(false)
  }


  React.useEffect(() => {
    console.log('callShenlong',callShenlong)
    if (modalOpen && (totalTodos < 7)) {
      audioTag.current.play()
    } else {
      if (modalOpen && !callShenlong) {
        console.log('imprimir video');
        setModalOpen(false);
        activeComment('comentario8');
      }
    }
  },[modalOpen])

  return ReactDOM.createPortal(
    <>
      {modalOpen &&  (
        <div className='modalBackground'>
          {callShenlong && (
            <div className='modalVideo'>
              <iframe className='videoShenlong' src="https://www.youtube.com/embed/CAS_KW7pGFA?rel=0" title="Goku llama a Shenlong y el deseo es .../Audio latino/Dragón Ball Súper" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              <FontAwesomeIcon onClick={closeVideoModal} className='modalCloseVideo' icon={faTimes} size={'3x'} />
            </div>
          )}
          {!callShenlong && (
            <div className={`modalContent ${!closingModal ? 'modalContentComming' : 'modalContentOut'}`}>
            <img src={Cloud} alt='flyingCloud' className='flyingCloud' />
            <FontAwesomeIcon onClick={closeModal} className='modalClose' icon={faTimes} size={'2x'} />  
            <div className='modalform'>
              {children}
            </div>
            <audio ref={audioTag} src={cloudSound} type='audio/mpeg' />
          </div>
          )}
    </div>
      ) 
      }
    </>,
    document.getElementById('modal')
    )

}

export { Modal }