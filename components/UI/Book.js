import { useRouter } from 'next/navigation'
import React from 'react'

function Book() {
    const router = useRouter();
  return (
    <div className="w-[350px] h-[460px] b-[350px] border-2 border-gray-400 bg-sky-200 shadow-[5px_5px_10px_gray]">
        <div className="w-full h-[calc(100%_-_40px)]">

        </div>
        <div className="w-[100%] h-[40px] flex justify-between  ">
            <div className="h-full w-[49%] cursor-pointer select-none flex justify-center items-center border-2 border-blue-500" 
                   >
                 <span>Buy</span> 
            </div>
            <div className="h-full w-[2%] "> </div>
            <div className="h-full w-[49%] cursor-pointer select-none flex justify-center items-center  border-2 border-blue-500"
                  onClick={()=>{ router.push("/preview") }} >
                 <span>Preview</span> 
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Book