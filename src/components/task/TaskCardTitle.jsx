import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCartTitle] = useState('Today');
  const handleClick = () => {
    setIsClick(true)
    console.log(isClick)
  }
  const handleChange = (e) => {
    setInputCartTitle(e.target.value);
    console.log(inputCardTitle)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false)
  }
  const handleBlur = () => {
    setIsClick(false)
  }
  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? <form onSubmit={handleSubmit}><input className="taskCardTitleInput" type="text" onChange={handleChange} onBlur={handleBlur} value={inputCardTitle} /></form > : <h3>{inputCardTitle}</h3>
      }
    </div>
  )
}
