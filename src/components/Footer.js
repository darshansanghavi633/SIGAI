import React from 'react';
import {TbHandFinger} from 'react-icons/tb'

export default function Footer() {
    const handleScrolltoTop=() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) 
  return (
    <div className='text-center'  style={{backgroundColor:"#343a40",padding:"1%"}}>
       <button className="btn btn-outline-info my-3" onClick={handleScrolltoTop} variant="outline-info">Back To Top<TbHandFinger className='icon'/> </button>
    </div>
  )
}
