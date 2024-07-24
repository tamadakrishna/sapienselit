import React from 'react'

function Book() {
  return (
    <div className="w-[350px] h-[460px] b-[350px] border-2 border-gray-400 bg-sky-200">
        <div className="w-full h-[calc(100%_-_40px)] border-2 border-red-500">

        </div>
        <div className="w-[100%] h-[40px] flex border-2 border-black">
            <div className="h-full w-[50%] cursor-pointer flex justify-center items-center border-2 border-blue-500"> <span>Buy</span> </div>
            <div className="h-full w-[50%] cursor-pointer flex justify-center items-center  border-2 border-blue-500"> <span>Preview</span> </div>
            <div></div>
        </div>
    </div>
  )
}

export default Book