import React from 'react';
import './style.scss';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Statement1 from '@mui/icons-material/FormatQuoteSharp';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import Delete from '@mui/icons-material/DeleteForever';


const Statement = () => {
  return (
    <div className='statement'>
      <ul>
        <li className='title'><button style={{marginLeft:'-15px'}}><ArrowBack/></button><h4>Statement</h4><button style={{color:'red',marginLeft:'50px'}}>+ Add More</button></li>
        <li>Add your statements here</li>
        <li className='box'><div><Statement1/><Edit className='edit'/><Delete className='del'/></div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex voluptas debitis culpa, aliquam </div></li>
        <li className='box'><div><Statement1/><Edit className='edit'/><Delete className='del'/></div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex voluptas debitis culpa, aliquam </div></li>
      </ul>
    </div>
  )
}

export default Statement