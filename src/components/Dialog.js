import React from 'react'
import ReportData from './ReportData'

function Dialog({ showDialog, setShowDialog }) {
  if (!showDialog) return null
  return (
    <div className=' absolute w-full h-screen flex items-center justify-center'>
      <div
        className='absolute w-full h-full bg-white/20 z-10 backdrop-blur-sm'
        onClick={() => setShowDialog(false)}
      ></div>

      <div className='min-w-96 min-h-96 border z-20 rounded-lg bg-white shadow-lg'>
        {/* <p>dialog</p>
        <button onClick={() => setShowDialog(false)}>Close</button> */}
        <ReportData setShowDialog={setShowDialog} />
      </div>
    </div>
  )
}

export default Dialog
