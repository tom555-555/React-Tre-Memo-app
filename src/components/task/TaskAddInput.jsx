import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  setInputText,
  inputText,
  setTaskList,
  taskList
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([...taskList,
    {
      id: taskId,
      text: inputText,
      draggableId: `task-${taskId}`

    }]);
    setInputText('');

  }
  const handleChange = (e) => {
    setInputText(e.target.value)

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input className="taskAddInput" type="text" placeholder="add a task" onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}
