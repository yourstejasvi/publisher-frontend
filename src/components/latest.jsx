import React, { useState } from 'react';
import Ai from "../Assets/AI.jpg";
import Beach from "../Assets/beach.jpg";
import Astro from "../Assets/astro.jpg";
import Books from "../Assets/books.jpg";
import NewYear from "../Assets/new-year.jpg";
import Graphic from "../Assets/images.png";
import HotChoclate from "../Assets/hotchoclate.jpg";
import Isro from "../Assets/isro.jpeg";
import Laptop from "../Assets/laptop.jpeg";
import Hover from "../Assets/hover.png";
import { FaPen } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";





const latest = () => {

  const list = [
    {
      id:1,
      image:Ai,
      title:"How AI is changing the world",
      Author: "Krishna Murthy",
    },
    {
      id:2,
      image:Beach,
      title:"Best vacation spots this year",
      Author: "Lila Chauhan",
    },
    {
      id:3,
      image:NewYear,
      title:"Habits to incorporate this year",
      Author: "Madhur Chaudhary",
    },
    {
      id:4,
      image:Astro,
      title:"Horoscope- Jan'24",
      Author: "Smriti Tarots",
    },
    {
      id:5,
      image:Books,
      title:"Best sellers 2023",
      Author: "Sanket",
    },
    {
      id:6,
      image:Graphic,
      title:"Graphic Desgning basics",
      Author: "Tejasvi Sharma",
    },
    {
      id:7,
      image:HotChoclate,
      title:"3 best drinks for winters",
      Author: "Nidhi Mehrotra",
    },
    {
      id:8,
      image:Isro,
      title:"Isro's new mission",
      Author: "Tech Savvy",
    },
    {
      id:9,
      image:Laptop,
      title:"How to make money on Publisher",
      Author: "Yashasvi Singh",
    },
  ];

  const ImageButton = ({ imageSrc, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
  }
      
  
  return (
    
    <>
      <h1 className='ml-[80px] mt-[70px] font-Merriweather tracking-widest text-xl text-teal-700'> Latest Articles </h1>



      
      <div dir='ltr'>
      <div class="group overflow-x-auto scrollbar-hide">

          <div class="flex flex-nowrap scroll-snap-type-x-mandatory mt-4 ml-10">

          {list.map((object) => (

            <div key={object.id} class="scroll-snap-align-start flex-none w-72 h-52 m-2 rounded-2xl shadow-md">
              

                      <img src={object.image} alt="image" className='h-full w-full rounded-2xl'/>
                    
      
                    
                                    
                      <div className='scroll-snap-align-start -mt-16 h-[64px] w-72 rounded-b-2xl py-2'>

                        <div className='relative z-10 -mt-2 h-[64px] w-72 rounded-b-2xl bg-white py-2 '>

                            <h5 className='text-teal-700 font-medium px-4 cursor-pointer hover:text-teal-900'>{object.title}</h5>
                            <div className='flex px-4'>
                                  <span className='ml-2 text-teal-700'><FaPen /></span>
                                  <h4 className='text-teal-700 font-medium ml-2 -mt-1 cursor-pointer hover:text-teal-900'>{object.Author}</h4>
                            </div>

                        </div>

                        

                      </div>


                 </div>

              ))
              };
              
              
            
          </div>
      </div>


      </div>
        
    </>
  )
}

export default latest