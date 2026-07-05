import React from 'react'

const TaskCard = ({ taskName, limitMonth, status}) => {
  return (
    <div>
        <p>{taskName}</p>
        <p>{limitMonth}月</p>
        <p>{status}</p>
    </div>
  )
}

export default TaskCard