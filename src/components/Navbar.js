import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {SiMicrodotblog} from 'react-icons/si'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
    <div className="container-fluid">
        <img src='download.jpg' style={{height:"50px",width:"50px",marginRight:"10px"}} alt='SIGAI'></img>
    <Link className="navbar-brand" to="/"><b><i>SIGAI</i></b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><FaHome className='icon'/>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/blog"><SiMicrodotblog className='icon'/>Blog</Link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  )
}
