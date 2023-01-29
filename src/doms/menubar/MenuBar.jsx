import React from 'react';
import './menubar.scss';


const MenuBar = () => {
  return (
        <div className='menu'>
        <ul>
          <li className='info'>Info</li>
          <li>F&Q</li>
          <li>Complaints & Feedback</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
        </ul>
    </div>
  )
}

export default MenuBar