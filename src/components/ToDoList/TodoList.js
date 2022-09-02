import React from 'react'

const styles = { margin: '10px 10px',width: '35vw',listStyle:'none'}

function TodoList(props) {
  return (
    <section>
      <ul style={styles}>
         {props.children}
      </ul>
   
    </section>
  )
}

export { TodoList }