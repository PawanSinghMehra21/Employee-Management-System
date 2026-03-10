import React from 'react'

function CreateTask() {
  return (
     <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form className='flex flex-wrap w-full items-start justify-between'>
         <div className='w-1/2'>  
           
           <div className='mb-4'>
             <h3 className='text-sm text-gray-300 py-1'>
               Task Title
            </h3>
            <input 
              type="text" 
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
              placeholder='Make a ui Design'
            />
           </div>

           <div className='mb-4'>
             <h3 className='text-sm text-gray-300 mb-1'>
                  Date
            </h3>
            <input 
              className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
              type="date"
            />
           </div>

           <div className='mb-4'>
              <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
             <input 
               className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
               type='text'   
               placeholder='Employee Name'
             />
           </div>

           <div>
              <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
             <input  
               className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-400' 
               type='text' 
               placeholder='design,dev etc'
             />
           </div>
           
         </div>
        
         <div className='w-1/2 flex items-start flex-col'>
            <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
            <textarea 
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' 
              cols='30'
              rows='10'>
            </textarea>

            <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>
              Create task
            </button>
         </div>
         
      </form> 
  </div>
  )
}

export default CreateTask