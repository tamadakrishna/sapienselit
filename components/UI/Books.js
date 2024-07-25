"use client";
import React, { useState } from 'react'
import Book from './Book'

function Books() {
    const books = [1,2,3,4,5,6,7,8];
    const [expand, setExpand] = useState(false);

    const handleSideBar = ()=>{
        setExpand((val)=>!val);
    }

  return (
    <div className="p-1 w-full h-full flex ">
        <div className={` ${expand ? 'w-[180px]' : 'w-[40px]'} h-full border-2 border-green-500`}>
            <div className='w-full h-[40px] flex items-center justify-end'>
                <span className="text-[35px] font-bold cursor-pointer mr-1" onClick={handleSideBar}>
                    {
                        expand ?  <span className='text-purple-500 select-none'> &lt; </span> : <span className='text-purple-500 select-none'> &gt; </span> 
                    }
                </span>
                
            </div>
            <div className="w-full h-[40px] border-2 border-gray-400"></div>
            <div className="w-full h-[40px] border-2 border-gray-400"></div>
            <div className="w-full h-[40px] border-2 border-gray-400"></div>

        </div>
        <div className={`${expand ? 'w-[calc(100%_-_180px)]' : 'w-[calc(100%_-_40px)]' } overflow-scroll no-scrollbar  h-full  flex flex-wrap justify-center gap-4 cursor-pointer`}>
            {
                books?.map((info,index)=>{
                    return <Book key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default Books