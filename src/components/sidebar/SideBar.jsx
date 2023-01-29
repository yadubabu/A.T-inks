import React from 'react';
import './sidebar.scss';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import Team from '@mui/icons-material/Diversity3Sharp';
import Orders from '@mui/icons-material/BorderColorSharp';
import Partners from '@mui/icons-material/HandshakeSharp';
import Awards from '@mui/icons-material/EmojiEventsSharp';
import AboutUs from '@mui/icons-material/InfoSharp';
import ProductListing from '@mui/icons-material/InfoSharp';
import PaymentInfo from '@mui/icons-material/PaidSharp';



const SideBar = () => {
  return (
    <div className='sidebar'>
      <div>
        <img src='./images/A.T-inks-logo.png' alt='A.T-Inkks'/>
      </div>
      <div>
        <ul>
        <li><DashboardSharpIcon/>DashBoard</li>
        <li><Orders/>Orders</li>
        <li><Team/>Team Members</li>
        <li><Partners/>Partners</li>
        <li><ProductListing/>Product Listings</li>
        <li><Awards/>Awards & Honours</li>
        <li className='current'><AboutUs/>About Us</li>
        <li className='last'><PaymentInfo/>Payment Info</li>
        </ul>
        </div>
        <div className='help'>
            <h4>Need Help ?</h4>
            <p>Our Team support is at your disposal</p>
            <button>Get Help</button>
        </div>
    </div>
  )
}

export default SideBar