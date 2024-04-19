'use client'
import Dialog from '@/components/Dialog'
import { useState } from 'react'

export default function Home() {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className=' w-full h-screen flex flex-col items-center justify-center'>
      <p className=' text-2xl p-4'>
        Hi this is your dashboard to get the report click the button below
      </p>
      <button
        className=' text-2xl border-2 border-blue-900 hover:bg-white rounded mt-4 p-2 cursor-pointer text-blue-900'
        onClick={() => setShowDialog(true)}
      >
        Get Report
      </button>
      <Dialog showDialog={showDialog} setShowDialog={setShowDialog} />
    </div>
  )
}
