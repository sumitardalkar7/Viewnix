import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='mt-[60px] col-span-11'>
      <ButtonsList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer