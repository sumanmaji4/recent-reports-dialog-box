import React from 'react'

function Dialog({ showDialog, setShowDialog }) {
  if (!showDialog) return null
  return (
    <div className=' absolute w-full h-screen flex items-center justify-center'>
      <div
        className='absolute w-full h-full bg-black opacity-40 z-10'
        onClick={() => setShowDialog(false)}
      ></div>

      <div className='min-w-96 min-h-96 border z-20 rounded-lg bg-white p-2 shadow-lg'>
        <p>dialog</p>
        <button onClick={() => setShowDialog(false)}>Close</button>
      </div>
    </div>
  )
}

export default Dialog
