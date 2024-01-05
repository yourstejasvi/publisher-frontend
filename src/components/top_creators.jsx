import React from 'react';
import tejasvi from "../Assets/tejasvi.jpg";
import yashasvi from "../Assets/yashasvi.jpg";
import Stick from "../Assets/stick.jpg";
import { FaEye } from "react-icons/fa";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { ImNewTab } from "react-icons/im";
import { Button } from '@mui/material';


const top_creators = () => {

  const topCreators  = [
    {
     id:1,
     dp:tejasvi,
     username:"Ruth",
     about: "Savage girl hours",
     readers:"300k",
    },
    {
      id:2,
      dp:yashasvi,
      username:"Yashasvi Sharma",
      about: "Writer- The joy of giving",
      readers:"130k",
    },
    {
      id:3,
      dp:Stick,
      username:"Who cares?",
      about: "I do",
      readers:"100k",
    },

  ];


  return (
    <>
      <h1 className='ml-[80px] mt-[70px] font-Merriweather tracking-widest text-xl text-teal-700'> Top Creators </h1>



      
      <div dir='ltr'>
      <div class="overflow-x-auto scrollbar-hide">

          <div class="flex flex-nowrap scroll-snap-type-x-mandatory mt-4 ml-10">

            {topCreators.map((object) => (

            <div key={object.id} class="scroll-snap-align-start flex-none w-72 h-36 m-2 bg-white shadow-md rounded-2xl">

              <img src={object.dp} alt="profile" className='ml-6 mt-3 h-12 w-12 rounded-[220px] shadow-xl' />
              <div className='text-xl font-semibold text-teal-700 tracking-wide ml-[80px] -mt-[42px] cursor-pointer hover:text-teal-900'>{object.username}</div>
              <div className='text-md text-teal-700 tracking-wide ml-[80px]'>{object.about}</div>
              <div className='flex flex-row ml-[80px] mt-2 text-teal-700 gap-2'><FaEye style={{marginTop:'3px'}}/> {object.readers} <ImNewTab style={{marginLeft:'80px',marginTop:'3px'}}/></div>
              <div className='flex gap-2 ml-[80px] mt-1 w-[130px] bg-teal-700 text-white text-bold px-5 rounded-xl cursor-pointer hover:shadow-xl hover:bg-teal-900'>Subscribe <SlUserFollow style={{marginTop:'2px'}}/> </div>

            </div>


            ))
            };

            
            
            
          </div>
      </div>


      </div>

    </>
  )
}

export default top_creators