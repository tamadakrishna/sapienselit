"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

function HeaderOptions() {
    const router = useRouter();
  return (
    <div className='ml-[220px]'>
        <ul className="flex">
            <li className='cursor-pointer' onClick={()=>{router.push('/courses')}}>Courses</li>
            <li className='cursor-pointer ml-[80px]' onClick={()=>{router.push('/books')}}>Books</li>
        </ul>
    </div>
  )
}

export default HeaderOptions