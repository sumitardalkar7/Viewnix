import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { BASE_URL, GOOGLE_API_KEY } from '../utils/constants';
import Comments from './Comments';
import VideoMetaData from './VideoMetaData';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const[videoDetails, setVideoDetails] = useState([]);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(closeMenu())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    getVideoDetail()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getVideoDetail = async () => {
    const data = await fetch(
      BASE_URL +
        "/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoId+"&key="+GOOGLE_API_KEY
    );
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };

  return  (
    <div className='mt-[60px]'> 
      <div className="dark:bg-zinc-900 dark:text-white grid  md:gap-x-6 px-2 md:px-8 2xl:px-14 gap-y-4 pt-4">
        <div className='col1 '>
          <div className='flex gap-5 h-[62vh]'>
            <div className=' w-3/4'>
            <iframe 
              className='rounded-xl'
              width="100%" height="100%" 
              src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            </div>
            <div className='col2 border border-black rounded-md w-1/4 no-scrollbar overflow-y-hidden hover:overflow-y-scroll flex flex-col-reverse'>
                <LiveChat/>
            </div>
          </div>
          <div>
            <VideoMetaData
              videoDetails = {videoDetails}
              channelId = {videoDetails?.snippet?.channelId}
            />
          </div>
          <div className=''>
            <Comments
              videoId = {videoId}
              commentCount={videoDetails?.statistics?.commentCount}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage