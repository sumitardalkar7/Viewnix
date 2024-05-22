import React from 'react';
import {MdOutlineSubscriptions,
    MdHomeFilled,
    MdOutlineVideoLibrary,
    MdOutlineHistory,
    MdOutlineWatchLater,
    MdOutlineMusicNote,
    MdOutlineLightbulb,
    MdOutlineKeyboardArrowDown,
    MdOutlineSettings,
    MdOutlinedFlag,
    MdHelpOutline,
    MdOutlineFeedback
} from 'react-icons/md';
import {RiVideoLine,RiShoppingBag2Line} from 'react-icons/ri'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {IoNewspaperOutline, IoTrophyOutline} from 'react-icons/io5'
import {GiHanger,GiClapperboard,GiAerialSignal} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // Early return
    if(!isMenuOpen) return null;
    return (
        <div className='col-span-1 sticky top-[73px] w-[15rem] px-3 pb-4 h-[calc(100vh-1rem)] no-scrollbar hover:overflow-y-scroll bg-white'>
            <ul>
                <Link to="/">
                <li className='home px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdHomeFilled size="1.5rem" className="mb-1 mr-4" />
                    Home
                </li>
                </Link>
                <li className='shorts px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <svg viewBox="0 0 24 24" focusable="false" className='w-5 h-5 block mr-5'><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
                    Shorts
                </li>
                <li className='subscription px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineSubscriptions size="1.5rem" className="mb-1 mr-4" />
                    Subscriptions
                </li>
            </ul>
            <hr className='border-gray-200 border-1 my-3'/>
            <ul>
                <li className='library px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineVideoLibrary size="1.5rem" className="mb-1 mr-4" />
                    Library
                </li>
                <li className='history px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineHistory size="1.5rem" className="mb-1 mr-4" />
                    History
                </li>
                <li className='your-videos px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <RiVideoLine size="1.5rem" className="mb-1 mr-4" />
                    Your Videos
                </li>
                <li className='watch-later px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineWatchLater size="1.5rem" className="mb-1 mr-4" />
                    Watch Later
                </li>
                <li className='watch-later px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineKeyboardArrowDown size="1.5rem" className="mb-1 mr-4" />
                    Show More
                </li>
            </ul>
            <hr className='border-gray-200 border-1 my-3'/>
            <div className="pl-4">
                <span className="text-sm">
                Sign in to like videos, comment, and subscribe.
                </span>
            </div>
          <div className="pt-4 pl-4 pb-1">
            <button className="border p-2  px-4 rounded-3xl  font-bold flex items-center gap-2">
              <FaUserCircle size="1.5rem" /> Sign in
            </button>
          </div>
          <hr className='border-gray-200 border-1 my-3'/>
            <span className='px-4 py-2'>Explore</span>
            <ul>
                <li className='trending px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <ImFire size="1.5rem" className="mb-1 mr-4" />
                    Trending
                </li>
                <li className='shopping px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <RiShoppingBag2Line size="1.5rem" className="mb-1 mr-4" />
                    Shopping
                </li>
                <li className='music px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineMusicNote size="1.5rem" className="mb-1 mr-4" />
                    Music
                </li>
                <li className='movies px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <GiClapperboard size="1.5rem" className="mb-1 mr-4" />
                    Movies
                </li>
                <li className='live px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <GiAerialSignal size="1.5rem" className="mb-1 mr-4" />
                    Live
                </li>
                <li className='gaming px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <SiYoutubegaming size="1.5rem" className="mb-1 mr-4" />
                    Gaming
                </li>
                <li className='news px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <IoNewspaperOutline size="1.5rem" className="mb-1 mr-4" />
                    News
                </li>
                <li className='sports px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <IoTrophyOutline size="1.5rem" className="mb-1 mr-4" />
                    Sports
                </li>
                <li className='learning px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineLightbulb size="1.5rem" className="mb-1 mr-4" />
                    Learning
                </li>
                <li className='fashion-beauty px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <GiHanger size="1.5rem" className="mb-1 mr-4" />
                    Fashion & Beauty
                </li>
            </ul>
            <hr className='border-gray-200 border-1 my-3'/>
            <ul>
                <li className='fashion-beauty px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineSettings size="1.4rem" className="mb-1 mr-4" />
                    Settings
                </li>
                <li className='fashion-beauty px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlinedFlag size="1.4rem" className="mb-1 mr-4" />
                    Report History
                </li>
                <li className='fashion-beauty px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdHelpOutline size="1.4rem" className="mb-1 mr-4" />
                    Help
                </li>
                <li className='fashion-beauty px-4 flex py-2 items-center hover:bg-gray-100 w-full rounded-lg cursor-pointer'>
                <MdOutlineFeedback size="1.4rem" className="mb-1 mr-4" />
                    Settings
                </li>
            </ul>
            <hr className='border-gray-200 border-1 my-3'/>
            <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060]">
            <div className="cursor-pointer ml-1">About</div>
            <div className="cursor-pointer ml-1">Press</div>
            <div className="cursor-pointer">Copyright</div>
            <div className="cursor-pointer ml-1">Contact us</div>
            <div className="cursor-pointer ml-1">Creators</div>
            <div className="cursor-pointer ml-1">Advertise</div>
            <div className="cursor-pointer ml-1">Developers</div>
          </div>
          <div className="links1 py-2 px-4  flex gap-1 flex-wrap font-medium text-[0.84rem] text-[#606060]">
            <div className="cursor-pointer ml-1">Terms</div>
            <div className="cursor-pointer ml-1">Privacy</div>
            <div className="cursor-pointer ml-1">Policy & Safety</div>
            <div className="cursor-pointer ml-1">How Streamy works</div>
            <div className="cursor-pointer ml-1">Test new features</div>
          </div>
          <div className="px-4 py-2 text-gray-400"> &copy; 2023 Google LLC</div>
        </div>
    )
}
export default Sidebar;