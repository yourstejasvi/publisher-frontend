import React, { useState } from 'react';
import Machli from "../Assets/machli.jpg";
import Melodi from "../Assets/melodi.jpg";
import Chandrayaan from "../Assets/Chandrayaan.jpg";
import Covid from "../Assets/covid.jpeg";
import Dua from "../Assets/dua.jpg";
import Sarson from "../Assets/sarson.jpg";
import gojo from "../Assets/gojo.jpg";
import Kullu from "../Assets/kullu.jpg";
import Winter from "../Assets/winter.jpg";
import Hover from "../Assets/hover.png";
import { FaPen } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";





const trending = () => {

  const list = [
    {
      id:1,
      image:Melodi,
      title:"This picture broke the internet",
      Author: "Rishabh Kaushik",
    },
    {
      id:2,
      image:Machli,
      title:"The Queen of Ranthambore",
      Author: "Riya Sharma",
    },
    {
      id:3,
      image:gojo,
      title:"The biggest mistake of gege?",
      Author: "Chiya",
    },
    {
      id:4,
      image:Chandrayaan,
      title:"Making India proud",
      Author: "MakeInIndia",
    },
    {
      id:5,
      image:Covid,
      title:"New strain of covid",
      Author: "Ministry of Health",
    },
    {
      id:6,
      image:Sarson,
      title:"Yellow covers the countryside",
      Author: "Nandini Kumar",
    },
    {
      id:7,
      image:Winter,
      title:"Covered in smog",
      Author: "Delhi Times",
    },
    {
      id:8,
      image:Kullu,
      title:"Kullu flocked, crisis awaits",
      Author: "Ghumakkad",
    },
    {
      id:9,
      image:Dua,
      title:"Dua enjoying in India",
      Author: "BollyTalks",
    },
  ];

  const ImageButton = ({ imageSrc, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
  }
      
  
  return (
    
    <>
      <h1 className='ml-[80px] mt-[70px] font-Merriweather tracking-widest text-xl text-teal-700'> Trending </h1>



      
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
                                  <span className='ml-2 text-teal-600'><FaPen /></span>
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

export default trending