import React from 'react';
import Sigai from './Sigai';
import Footer from './Footer';
import {GiBrain} from 'react-icons/gi'

export default function Home() {
  return (
    <React.Fragment>
    <div className='container text-center' style={{marginTop:"120px"}}>
      <h1 style={{color:"#12e6c8",fontFamily:"monospace"}}>SIGAI<GiBrain style={{marginRight:"5px"}}/></h1>
      <div className='container my-3'>

        <img src='AI1.jpg' alt='AI' ></img>
      </div>
      <h2 style={{color: "#a7d129"}}> ACM Special Interest Group on Artificial Intelligence</h2>
      <h4>We promote and support the growth and application of AI principles and techniques throughout computing </h4>
      <div>
      </div>
    </div>
    <Sigai/>
    <div className='container text-center my-5'>
    <h3 style={{color: "#a7d129"}}>"Artificial intelligence is one of the most profound things we're working on as humanity. It has the potential to fundamentally transform the way we live, work, and interact with each other. And we're really just getting started." - Sundar Pichai</h3>

    </div>
    <Footer/>
      </React.Fragment>
  )
}
