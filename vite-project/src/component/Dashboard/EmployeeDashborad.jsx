import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashborad = () => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen' >
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashborad
