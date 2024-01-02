import React from 'react';
import Footer from "../Assets/footer.png";

const footer = () => {
  return (
    <>
      <footer>

        <img src={Footer} alt="footer" className='mt-14'></img>
              <div className='-mt-36 ml-24'>

                <h6 className='text-white text-sm font-Merriweather tracking-widest'>© Publisher-2024</h6>
                <h6 className='text-white text-sm font-Merriweather tracking-widest'>© Tejasvi Sharma</h6>

              </div>
        

      </footer>
    </>
  )
}

export default footer