import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Bg from "../Assets/popup-bg.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { TextField } from '@mui/material';
import Box from "@mui/material/Box";




const Popup = () => {

    const [isOpen, setIsOpen] = useState(true);

    const CloseModal = () => {
        setIsOpen(false);
    };


  return (
    <>
    <Modal
    isOpen={isOpen}
    onRequestClose={CloseModal}
    contentLabel="Join Publisher"
    className="h-[600px] w-[600px] ml-[450px] mt-[72px] bg-teal-700 bg-opacity-93 rounded-3xl outline-none"
    style={{position:'relative',zIndex:'2'}}
    >   


    <img src={Bg} alt="picture" className='relative z-10 opacity-40 rounded-2xl'/>
    <Box 
    component='form'
    sx={{'& .MuiTextField-root': { m:1, width:'35ch'},
    position: 'relative',
    zIndex: 20,
    }}
    noValidate
    autoComplete="off"
    >

    
     <button onClick={CloseModal} className='cursor-pointer ml-[550px] -mt-5 text-white hover:text-black absolute'><IoCloseSharp /></button>
        <h2 className='relative z-30 text-5xl text-white font-semibold content-center ml-[210px] -mt-[560px] pt-5'>SIGN-UP</h2>
        <div className='relative z-50 w-3/5 bg-white h-1 rounded-lg ml-[120px] mt-3'></div>
        
        <div className='relative z-50 flex flex-col mt-16 ml-[150px]'>

            <TextField required id="username" label="@username" className='bg-white rounded-2xl'></TextField>
            <TextField required id="email" label="Email" className='bg-white rounded-2xl' ></TextField>
            <TextField required id="password" label="Password" className='bg-white rounded-2xl'></TextField>

            <button className='bg-white text-teal-700 font-bold w-1/3 h-12 mt-[20px] ml-[70px] rounded-2xl shadow-lg hover:bg-teal-700 hover:text-white'>JOIN</button>

        </div>
        
        

    
    
    
    </Box>
       
    </Modal>
    </>
  )
}

export default Popup