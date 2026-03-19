import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)   // ✅ FIX

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
        <h2 className=' text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
      </div>

      <div className='overflow-auto'>

        {userData && userData.employees.map((elem, idx) => (
          <div key={idx} className='bg-emerald-400 mb-2 py-2 px-4 flex justify-between'>
            <h2 className=' text-lg font-medium w-1/5 text-red-600'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskNumbers.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-green-600'>{elem.taskNumbers.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskNumbers.failed}</h5>
          </div>
        ))}

      </div>

    </div>
  )
}

export default AllTask