import React from 'react';
import Instagram from "../Assets/instagram.svg";
import Youtube from "../Assets/youtube.svg";
import Twitter from "../Assets/twitter.svg";
import Pinterest from "../Assets/pinterest.svg";

const links = () => {
  return (
    <>
    <div className='flex flex-col mt-56 -ml-2 fixed z-20'>

      <img className= "h-10 cursor-pointer hover:ml-3 ease-in duration-200" src={Instagram}></img>
      <img className= "h-10 cursor-pointer hover:ml-3 ease-in duration-200" src={Youtube}></img>
      <img className= "h-10 cursor-pointer hover:ml-3 ease-in duration-200" src={Twitter}></img>
      <img className= "h-10 cursor-pointer hover:ml-3 ease-in duration-200" src={Pinterest}></img>

    </div>
    </>
  )
}

export default links