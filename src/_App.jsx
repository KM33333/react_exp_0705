import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './components/ProductCard'
import TaskCard from './components/TaskCard'

function App() {

  const task = [
    {id:1, taskName:'宿題', limitMonth:"2026/6", status:'未着手'},
    {id:2, taskName:'課題', limitMonth:"2026/7", status:'着手中'},
    {id:3, taskName:'レポート', limitMonth:"2026/8", status:'完了'}
  ]

  return (
    <>
    {task.map((task) => (
      <TaskCard
        key={task.id}
        taskName={task.taskName}
        limitMonth={task.limitMonth}
        status={task.status}
      />
    ))}
    <ProductCard productName="おおほり"/>
    </>
  )
}

export default App
