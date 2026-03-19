import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'   // ✅ added import
import NewTask from '../Tasklist/NewTask'

function CreateTask() {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    const taskObj = {   // ✅ use local object
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: true,
      completed: false
    }

    setNewTask(taskObj)

    const data = userData.employees   // ✅ fixed

    data.forEach(function(elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(taskObj)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1   // ✅ fixed
      }
    })

    setUserData({ employees: data })   // ✅ correct structure

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-wrap w-full items-start justify-between'>

        <div className='w-1/2'>

          <div className='mb-4'>
            <h3 className='text-sm text-gray-300 py-1'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
              type="text"
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400'
              placeholder='Make a UI Design'
            />
          </div>

          <div className='mb-4'>
            <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
            <input
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400'
              type="date"
            />
          </div>

          <div className='mb-4'>
            <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e)=>setAssignTo(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400'
              type='text'
              placeholder='Employee Name'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
            <input
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400'
              type='text'
              placeholder='design, dev etc'
            />
          </div>

        </div>

        <div className='w-1/2 flex items-start flex-col'>
          <h3 className='text-sm text-gray-300 mb-1'>Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'
          ></textarea>

          <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateTask