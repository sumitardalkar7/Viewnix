import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomeMessage } from '../utils/helper';
import {PiUserCircleLight} from 'react-icons/pi'
import {VscSend} from 'react-icons/vsc'

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) =>store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name:generateRandomName(),
                message: generateRandomeMessage(10)
            }))
        },2000);
        return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <div className='p-2'>
        <div>
            {chatMessages.map((c,i)=>(
                <ChatMessage
                    key={i}
                    name={c.name}
                    message={c.message}
                />
            ))}
        </div>
        <form 
            className='mt-2'
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name: "Nirali",
                    message: liveMessage,
                }));
                setLiveMessage("");
            }}
        >
            <input 
                type='text' 
                placeholder='Chat..'
                maxLength={200}
                className='w-full px-2 py-1 text-sm outline-none border-black border-b-[1px]'
                value={liveMessage}
                onChange={(e)=>{
                    setLiveMessage(e.target.value);
                }}
            >
            </input>
        </form>
        <div className='flex justify-between mt-2'>
            <PiUserCircleLight size="1.5rem"/>
            <div className='flex gap-3'>
                <span className='text-gray-400 text-sm'>0/200</span>
                <button
                    onClick={()=>
                        {
                            dispatch(addMessage({
                                name: "Nirali",
                                message: liveMessage,
                            }));
                            setLiveMessage("");
                        }
                    }
                >
                    <VscSend size="1.5rem" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default LiveChat