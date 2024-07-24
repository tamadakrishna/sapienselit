import React from 'react'
import Book from './Book'

function Books() {
    const books = [1,2,3,4,5,6,7,8];
  return (
    <div className="p-1 flex flex-wrap justify-center gap-4">
        {
            books?.map((info,index)=>{
                return <Book key={index}/>
            })
        }
    </div>
  )
}

export default Books