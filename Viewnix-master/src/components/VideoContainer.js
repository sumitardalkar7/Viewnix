import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  }

  return (
      <div className='grid justify-center justify-items-center mt-10 grid-cols-[repeat(auto-fill,minmax(310px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] 
      pt-10 px-8 pb-4 overflow-y-scroll no-scrollbar'>
        {videos.map(video => 
          <Link 
            key={video.id} 
            to={"/watch?v="+video.id}
          >
            <VideoCard  
              info={video}
            />
          </Link>
        )}  
    </div>
  )
}

export default VideoContainer