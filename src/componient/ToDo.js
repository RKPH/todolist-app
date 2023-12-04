import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task ,toggleComplete, deleteJob,editJob }) => {
  return (
    <div className='Todo'>
       <p onClick={()=>{toggleComplete(task.id)}} className={`${task.completed ? 'completed':"incompleted"}`}>{task.task}</p>
       <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=> {editJob(task.id)}}/>
          <FontAwesomeIcon  icon={faTrash} onClick={()=> {deleteJob(task.id)}}/>
       </div>
    </div>
  )
}