'use client'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { BiFirstPage } from 'react-icons/bi'
import { BiLastPage } from 'react-icons/bi'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

function ReportData({ setShowDialog }) {
  return (
    <div className='flex flex-col w-[60vw] min-w-[500px]'>
      <section className='flex justify-center items-center p-4'>
        <p className='flex-1 text-center font-bold text-[18px]'>
          Recently Generated Reports
        </p>
        <span className='p-0.5 mx-2 border-2 border-slate-500 rounded-lg cursor-pointer'>
          <CiFilter />
        </span>
        <span
          className='p-0.5 border-2 border-slate-500 rounded-lg cursor-pointer'
          onClick={() => setShowDialog(false)}
        >
          <IoClose />
        </span>
      </section>
      <div>
        <div className=' bg-gray-100 flex font-semibold text-gray-500 py-1'>
          <span className='w-[120px] px-4'>Data</span>
          <span className='flex-1'>Report Name</span>
          <span className='w-[120px] px-4'>Download</span>
        </div>
        {<p>print data </p>}
      </div>
      <section>pagination</section>
    </div>
  )
}

export default ReportData
