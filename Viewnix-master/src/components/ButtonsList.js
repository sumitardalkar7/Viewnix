import React from 'react'
import Button from './Button'
import { buttonsList } from '../utils/helper'
const ButtonsList = () => {

  return (
    <div className='flex fixed bg-white px-8 py-2 w-full'>
      {buttonsList.map((list) => (
          <Button name={list}/>
      ))}
    </div>
  )
}

export default ButtonsList