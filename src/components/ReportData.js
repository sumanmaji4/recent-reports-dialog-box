'use client'
import React, { useEffect, useState } from 'react'
import { CiFilter } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { BiFirstPage } from 'react-icons/bi'
import { BiLastPage } from 'react-icons/bi'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

function ReportData({ setShowDialog }) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [row, setRow] = useState(3)
  console.log(row)

  let lastPage = Math.floor((data.length + row - 1) / row)
  let filteredData = data.slice(currentPage * row, currentPage * row + 1 + row)

  useEffect(() => {
    setLoading(true)
    try {
      fetch('https://dummyjson.com/todos')
        .then((res) => res.json())
        .then((data) => {
          setData(data.todos)
        })
    } catch (err) {
      console.log(err)
      setError('Unable to fetch data')
    }
    setLoading(false)
  }, [])

  return (
    <div className='flex flex-col w-[50vw] min-w-[500px] max-h-[80vh] overflow-y-auto'>
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
        <div className=' bg-gray-100 flex font-semibold text-gray-500 py-1 mb-2'>
          <span className='w-[120px] px-4'>Data</span>
          <span className='flex-1'>Report Name</span>
          <span className='w-[120px] px-4'>Download</span>
        </div>
        {!isLoading && error && <p className=' text-red-500'>{err}</p>}
        {isLoading ? (
          <p>Loading data... </p>
        ) : (
          filteredData.map((item) => (
            <div className='flex justify-center mb-6 text-gray-800'>
              <span className='w-[120px] px-4'>
                <p>22.07.21</p>
                <p className=' text-xs text-gray-400'>16:25 PM</p>
              </span>
              <span className='flex-1'>{item.todo}</span>
              <span className='w-[100px] px-4 mx-auto cursor-pointer'>
                <HiOutlineDocumentDownload className=' text-2xl text-gray-500' />
              </span>
            </div>
          ))
        )}
      </div>
      {/* // footer */}
      <section className=' border-t p-4 flex justify-around  text-gray-600 items-center text-sm'>
        <section className='flex  gap-2'>
          <span className='flex  items-center gap-1'>
            <BiFirstPage /> Prev
          </span>
          {/* {[...Array(data.length / row)].map((dd, i) => {
            return <p>{i + 1}</p>
          })} */}
          <span className='flex items-center gap-1'>
            Next
            <BiLastPage />
          </span>
        </section>
        <section>
          Rows per page
          <select onChange={(e) => setRow(+e.target.value)}>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
            <option value={10}>10</option>
          </select>
        </section>
      </section>
    </div>
  )
}

export default ReportData
