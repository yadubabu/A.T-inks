import React from "react";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import Search from '@mui/icons-material/SearchSharp';

import './header.scss';

const Header = () => {
  const search=<Search/>;
  return (
    <div className='header'>
      <div className="logo"><img src="./images/A.T-inks-logo.png" alt="atinks" />
      <h6>A.T.Inks</h6></div>
      <input type='text' className="search" placeholder="Search"/>
      <div className="cart"><ui><li><ProductionQuantityLimitsIcon/></li><li className="check">Checkout(200)</li></ui></div>
      <div><ui className='userList'><li><AccountCircleIcon/></li><li>User Admin</li><li><ArrowDropDownSharpIcon/></li></ui></div>
    </div>
  );
};

export default Header;
