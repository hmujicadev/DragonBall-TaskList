import React from 'react'

const styles = { padding:0,listStyle:'none', width:'100%'}

function TodoList(props) {
  return (
      <ul style={styles}>
         {props.children}
      </ul>
  )
}

export { TodoList }