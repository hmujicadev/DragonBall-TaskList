import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  let skeleton = [];
  let row = 1;
  while (row < 5) {
    skeleton.push(
      <div className='taskWrapper' key={row}>
        <div className='LoadingEsphere'></div>
        <div className='LoadingTaskContainer'></div>  
      </div>
    );
    row++
  }

  return (
    <div className='LoadingContainer'>
        {skeleton.length > 0 && skeleton}
    </div>
  )
}

export {TodosLoading}