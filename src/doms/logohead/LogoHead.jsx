import React from 'react';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';

import './logohead.scss';
import MenuBar from '../menubar/MenuBar';
import MainBody from '../mainbody/MainBody';

const LogoHead = () => {
  return (
    <div className='logohead'>
        <div className='head'>
        <h2>
          About Us
        </h2>
        </div>
        <div>
        <ul>
          <li><img src='./images/A.T-inks-logo.png' alt='A.T-Inkks'/></li>
          <li><h4>A.T-Inks</h4><VerifiedSharpIcon className='icon'/></li>
          <li><p>Company verified</p></li>
        </ul>
        </div>
        <div><p className='cap'>Lorem ipsum dolor sit, amet consectetur ipsam exercitationem.<Edit className='edit'/></p></div>
        {/* <div className='menu'>
        <ul>
          <li className='info'><a href='/' >Info</a></li>
          <li><a href='/f&q'>F&Q</a></li>
          <li><a href='/feedback'>Complaints & Feedback</a></li>
          <li><a href='/privacy&policy'>Privacy & Policy</a></li>
          <li><a href='terms&conditions'>Terms & Conditions</a></li>
        </ul>
        </div> */}
        <div>
          <MainBody/>
        </div>
    </div>
  )
}

export default LogoHead