import React from 'react'
import SignIn from '../UI/SignIn'
import HeaderOptions from '../UI/HeaderOptions'

function Header() {
  return (
    <div className="w-[100%] h-[100%] border-b-[2px] border-[#D7DEE4] bg-[#FAFBFC]
        flex">
        <div className="w-[50%] flex items-center ">
            <HeaderOptions/>
        </div>
        <div className='w-[50%] h-[100%]  flex justify-end items-center'>
            <div className='w-[300px]'>
                <SignIn/>
            </div>
        </div>
    </div>
  )
}

export default Header