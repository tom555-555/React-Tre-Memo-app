import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { TaskAddInput } from './TaskAddInput'
import { TaskCardDeleteButton } from './TaskCardDeleteButton'
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';


export const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div
            className="taskCardTitleAndDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>

          <TaskAddInput
            setInputText={setInputText}
            inputText={inputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}

    </Draggable>

  )
}
