import moment from 'moment/moment';
import React, { useState } from 'react'
import { BiCaretDown, BiCaretUp,BiLike, BiDislike } from 'react-icons/bi';

const Comment = ({data}) => {
    
    const [showReplies, setShowReplies] = useState(false);

  return (
    <div>
        <div className='flex my-2 text-sm'>
            <img 
                className='w-7 h-7 rounded-full mt-1'
                alt='user' 
                src={data?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl ??
                  data?.snippet?.authorProfileImageUrl}>
            </img>
            <div className='px-2'>
                <div className='flex gap-2 '>
                <div className='font-medium'>
                    {data?.snippet?.topLevelComment?.snippet?.authorDisplayName ?? data.snippet.authorDisplayName}
                </div>
                <div className='comment_time text-gray-500'>
                    {moment(
                        data?.snippet?.topLevelComment?.snippet?.publishedAt ??
                        data?.snippet?.publishedAt
                    ).fromNow()}
                </div>
                </div>
                <div className=''>{data?.snippet?.topLevelComment?.snippet?.textDisplay ?? data.snippet.textDisplay}</div>
                <div className='like_dislike flex gap-4 pt-2'>
                    <button className='like  cursor-pointer flex gap-1 items-center'>
                        <div className='like_icon hover:bg-zinc-200 p-2 rounded-full'>
                            <BiLike size='1.2rem' className='text-gray-600 ' />
                        </div>
                        <div>
                            {Intl.NumberFormat('en', { notation: 'compact' }).format(
                                data?.snippet?.topLevelComment?.snippet?.likeCount ??
                                data.snippet.likeCount
                            )}
                        </div>
                    </button>
                    <button className='cursor-pointer flex gap-1 items-center hover:bg-zinc-200 p-2 rounded-full'>
                        <div className=''>
                            <BiDislike size='1.2rem' className='text-gray-600 ' />
                        </div>
                    </button>
                    <span className='font-semibold cursor-pointer text-xs hover:bg-zinc-200  py-2 px-4 rounded-2xl'>
                        Reply
                    </span>
                </div>
            </div>
        </div>
        <div className='replies'>
        {data?.replies && (
          <div className=' ml-4 pl-10'>
            <div
              className='reply_toggle cursor-pointer text-purple-700 flex font-bold text-sm items-center mb-2'
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? (
                <BiCaretUp size='1.5rem' />
              ) : (
                <BiCaretDown size='1.5rem' />
              )}
              <span className='cursor-pointer'>
                {data.replies.comments.length} replies
              </span>
            </div>
            {showReplies && (
              <div>
                {data.replies.comments.map((reply) => (
                  <Comment key={reply.id} data={reply} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment