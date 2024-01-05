import React from 'react';
import Fashion from "../Assets/fashion.jpg";
import Writer from "../Assets/writer.jpg";
import Fitness from "../Assets/chirag-barjatya.avif";
import Cook from "../Assets/Cook.jpg";
import Publisher from "../Assets/Publisher.jpeg";

const success_stories = () => {

  const successStories = [
    { 
      id:1,
      image:Fashion,
      name:"Pihu",
      industry:"Fashion",
      story:"From sewing clothes for my dolls to designing clothes for my clients, Publisher helped me achieve my dreams."
    },
    {
      id:2,
      image:Writer,
      name:"Kaushiki",
      industry:"Writer",
      story:"Always loved making up stories for my kids, didnt ever imagine i could make money out of it. Thanks to Publisher!"
    },
    {
      id:3,
      image:Fitness,
      name:"Chirag Barjatyaa",
      industry:"Fitness",
      story:"Helping people achieve thier fitness goal all around the world. Publisher helped me connect to people worldwide."
    },
    {
      id:4,
      image:Cook,
      name:"Sangeeta Khanna",
      industry:"Food",
      story:"Never thought so many people would read what i like to cook and innovate in my kitchen and garden. Publisher made it possible."
    },
    {
      id:5,
      image:Publisher,
      name:"Create your own success story",
      industry:"Write & Earn",
      story:"Join million others on Publisher and monetise your articles"
    },
  ];
  return (
    <>
      <h1 className='ml-[80px] mt-[70px] font-Merriweather tracking-widest text-xl text-teal-700'> Success Stories </h1>



      
      <div dir='ltr'>
      <div class="overflow-x-auto scrollbar-hide">

          <div class="flex flex-nowrap scroll-snap-type-x-mandatory mt-4 ml-10">

          {successStories.map((object) => (

            <div key={object.id} class="scroll-snap-align-start flex-none w-[450px] h-52 bg-white m-2 rounded-2xl shadow-md">

              <img src={object.image} alt="img" className='h-[175px] w-[170px] p-2 ml-5 mt-3 rounded-2xl shadow-sm' />
              <div className='text-teal-700 text-2xl ml-[200px] -mt-[150px] font-medium cursor-pointer tracking-wider hover:text-teal-900'>{object.name}</div>
              <div className='text-teal-700 text-lg ml-[200px]'>{object.industry}</div>
              <div className='text-black text-sm justify-center ml-[200px]'>{object.story}</div>
            </div>

          )

          )};

            
            
            
          </div>
      </div>


      </div>

    </>
  )
}

export default success_stories