import React, { useEffect, useState } from 'react'
import { BASE_URL, GOOGLE_API_KEY } from '../utils/constants';
import {BiLike, BiDislike} from "react-icons/bi";
import { TfiShare, TfiDownload, TfiMoreAlt } from "react-icons/tfi";
import moment from 'moment';

const VideoMetaData = ({videoDetails, channelId}) => {

    const [channelDetails, setChannelDetails] = useState({});

    const [desc, setDesc] = useState(true);
    const [showButton, setShowButton] = useState("Show More");
    // console.log(videoDetails)
    // console.log(channelId)

    useEffect(()=>{
        get_channel_details();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        //set description
        if (videoDetails?.snippet?.description.length > 100) {
          setDesc(videoDetails?.snippet?.description.slice(0, 100) + "...");
        } else {
          setDesc(videoDetails?.snippet?.description);
        }
    }, [videoDetails]);

    const get_channel_details = async () => {
        const data = await fetch(
          BASE_URL +
            `/channels?part=snippet%2Cstatistics%2CcontentDetails&id=`+channelId+`&key=`+GOOGLE_API_KEY
        );
        
        const json = await data.json();
        if(json && json.items && json.items.length>0)
        {  
          setChannelDetails(json.items[0]);
        }
        // console.log(json);
    };  

    const toggleShowButton = () => {
        if (showButton === "Show More") {
          setDesc(videoDetails?.snippet?.description);
          setShowButton("Show Less");
        } else {
          setDesc(videoDetails?.snippet?.description.slice(0, 100) + " ...");
          setShowButton("Show More");
        }
    };

  return (
    <div className='m-2'>
        <div className="font-bold text-lg mb-2">
            {videoDetails?.snippet?.title}
        </div>
        <div className="flex justify-between flex-wrap gap-y-4 gap-2 items-center">
          <div className="channel_details flex gap-2 items-center">
            <div className="w-10 h-10 ">
              <img
                className="w-full rounded-full"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channel icon"
              />
            </div>
            <div className="channel_name">
              <div className="name font-bold text-sm">
                {channelDetails?.snippet?.localized?.title}
              </div>
              <div className="text-xs">
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  channelDetails?.statistics?.subscriberCount
                )}{" "}
                subscribers
              </div>
            </div>
            <div className="subs_button ml-2">
              <button className="bg-black dark:bg-zinc-700  text-sm text-white rounded-2xl px-4 py-2 ">
                {" "}
                Subscribe
              </button>
            </div>
          </div>

          <div className="video_stats flex items-center flex-wrap gap-2 text-sm">
            <div className="button-wrapper flex bg-gray-200 dark:bg-zinc-700 rounded-2xl p-2">
              <button className="like   flex gap-1 items-center pr-2">
                <div className="like_icon">
                  <BiLike size="1.2rem" className="text-gray-600 dark:text-white " />
                </div>
                <div className="like_count ">
                  {Intl.NumberFormat("en", { notation: "compact" }).format(
                    videoDetails?.statistics?.likeCount
                  )}
                </div>
              </button>
              <button className="cursor-pointer">
                <div className="border-l-2 border-black/20 dark:border-white/50 pl-2">
                  <BiDislike size="1.2rem" className="text-gray-600 dark:text-white" />
                </div>
              </button>
            </div>
            <button className="share flex items-center gap-2 bg-gray-200 dark:bg-zinc-700 rounded-2xl p-2">
              <TfiShare />
              <span>Share</span>
            </button>
            <button className="download flex items-center justify-center gap-2 bg-gray-200 dark:bg-zinc-700  rounded-2xl p-2">
              <TfiDownload />
              <span>Download</span>
            </button>
            <button className="more flex items-center gap-2 bg-gray-200 rounded-2xl p-2 dark:bg-zinc-700  ">
              <TfiMoreAlt />
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm p-4 bg-gray-100 dark:bg-zinc-700 rounded-xl">
          <div className="flex gap-4 font-bold pb-1">
            <div className="video_views ">
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                videoDetails?.statistics?.viewCount
              )}{" "}
              views
            </div>
            <div className="published_date">
              {moment(videoDetails?.snippet?.publishedAt).fromNow()}
            </div>
          </div>
          <div className="desc whitespace-pre-wrap break-words ">
            {desc}
            {videoDetails?.snippet?.description.length > 100 && (
              <button className="font-bold block" onClick={toggleShowButton}>
                {showButton}
              </button>
            )}
          </div>
        </div>
    </div>
  )
}

export default VideoMetaData