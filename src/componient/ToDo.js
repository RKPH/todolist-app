import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ToDo = ({ task, toggleComplete, deleteJob, editJob, isSelected, handleSelect }) => {
  const currentDate = new Date();
  const isToday = currentDate.toDateString() === new Date(task.date).toDateString();
  console.log(isToday)
  const displayContent = isToday ? task.time : task.date;

  return (
    <div className='Todo'>
      <input type="checkbox" checked={isSelected} onChange={() => handleSelect(task.id)} />
      <p onClick={() => { toggleComplete(task.id) }} className={`${task.completed ? 'completed' : 'incompleted'}`}>
        {task.task} - {displayContent}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => { editJob(task.id) }} />
        <FontAwesomeIcon icon={faTrash} onClick={() => { deleteJob(task.id) }} />
      </div>
    </div>
  );
};
