import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { BASE_URL, GOOGLE_API_KEY } from '../utils/constants';

const VideoCard = ({info}) => {

    const {snippet} = info;
    
    const {channelTitle, title, thumbnails, channelId} = snippet;
    const [channelDetails, setChannelDetails ] = useState([]);

    useEffect(()=>{
        getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getChannelDetails = async() => {
    const data = await fetch(
        BASE_URL +
            `/channels?part=snippet%2Cstatistics%2CcontentDetails&id=`+channelId+`&key=`+GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setChannelDetails(json.items[0]);
    }

    return (
        <div className='w-full cursor-pointer h-fit '>
            <img 
                className='rounded-lg'
                src={thumbnails.medium.url} 
                alt='thumbnail'
            />
            <ul className='p-2'>   
                <div className='flex gap-4'>
                    <img 
                        className='rounded-full w-8 h-8'
                        alt='channel-icon'
                        src={channelDetails?.snippet?.thumbnails?.default?.url}
                    >
                    </img>
                    <div className='flex flex-col'>
                        <li className='font-semibold '>{title}</li>
                        <li className='text-gray-600 text-base'>{channelTitle}</li>
                            <div className='flex gap-1 text-gray-700 text-sm'>
                                <li>
                                    {Intl.NumberFormat("en", { notation: "compact" }).format(
                                        info?.statistics?.viewCount
                                        )}{" "} views
                                </li>
                                <span>•</span>
                                <li>
                                    {moment(info?.snippet?.publishedAt).fromNow()}
                                </li>
                            </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default VideoCard;