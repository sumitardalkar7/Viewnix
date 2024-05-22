import React from 'react'
import { PiUserCircleLight } from "react-icons/pi";

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center py-1'>
        <PiUserCircleLight size="1.5rem" className="mr-1"/>
        <span className='font-bold pr-2'>{name}</span>
        <span className=''>{message}</span>
    </div>
  )
}

export default ChatMessage