import React, { useEffect, useState } from 'react'
import { BASE_URL, GOOGLE_API_KEY } from '../utils/constants';
import Comment from './Comment';
import {MdOutlineSort} from 'react-icons/md'
import {PiUserCircleLight} from 'react-icons/pi'

const Comments = ({videoId,commentCount}) => {

    const [comments, setComments] = useState([]);

    console.log(commentCount)
    useEffect(()=>{
        getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    const getComments = async () => {
        const data = await fetch(
          BASE_URL +
            `/commentThreads?part=snippet%2Creplies&order=relevance&key=${
              GOOGLE_API_KEY
            }&videoId=${videoId}&textFormat=plainText`
        );
        const json = await data.json();
        // console.log(json);
        setComments(json.items);
      };

      const CommentsList = ({commentsList}) => {
        return commentsList.map((comment) => (
            <div key={comment.id}>
                <Comment data={comment}/>
            </div>
        ))
    }

  return ( 
    <div className='m-4'>
      <div className="flex gap-8 items-center mb-4 ">
        <div className="font-medium ">
          {parseInt(commentCount).toLocaleString()} Comments
        </div>
        <div className="flex gap-2 cursor-pointer items-center">
          <MdOutlineSort size="1.5rem" />
          <span className="font-semibold text-sm">Sort by</span>
        </div>
      </div>
      <div className="text-sm flex gap-3 my-4">
        <div className=''>
          <PiUserCircleLight size="2.5rem" />
        </div>
        <div className="w-full ">
          <input
            className="border-b dark:border-white/50 w-full h-8 focus:outline-none py-2 focus:border-black focus:border-b-2"
            type="text"
            placeholder="Add a comment..."
          />
          <div className="flex justify-end gap-4 pt-2 font-semibold">
            <button className="hover:bg-zinc-200 dark:hover:bg-zinc-700 px-4 py-2 rounded-full">
              Cancel
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-3xl text-gray-500">
              Comment
            </button>
          </div>
        </div>  
      </div>    
      <CommentsList commentsList = {comments}/>
    </div>  
  )
}

export default Comments