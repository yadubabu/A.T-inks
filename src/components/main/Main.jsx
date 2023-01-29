import React,{useEffect, useState} from 'react';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import Info from '../Info';
import Privacy from '../Privacy';
import Terms from '../Terms';
import FandQ from '../FandQ';
import Feedback from '../Feedback';
import { NavigateFunction } from 'react-router-dom';

import './main.scss'

const Main = () => {
// const [info,setInfo]=useState('info');
const [info,setInfo]=useState('info')
const [fandq,setFandq]=useState('nofandq');
const [feedback,setFeedback]=useState('nofeedback');
const [privacy,setPrivacy]=useState('noprivacy')
const [terms,setTerms]=useState('noprivacy');

const showDisplay=(id)=>{
 
  if(id==='info'){
    setInfo(id);
    setFandq('nofandq');
    setFeedback('nofeedback');
    setPrivacy('noprivacy');
    setTerms('noterms');

  }
  else if(id==='fandq'){
    setInfo('noinfo');
    setFandq(id);
    setFeedback('nofeedback');
    setPrivacy('noprivacy');
    setTerms('noterms');
  }
  else if(id==='terms'){
    setInfo('noinfo');
    setFandq('nofandq');
    setFeedback('nofeedback');
    setPrivacy('noprivacy');
    setTerms(id);
  }
  else if(id==='feedback'){
    setInfo('noinfo');
    setFandq('nofandq');
    setFeedback(id);
    setPrivacy('noprivacy');
    setTerms('noterms');
  }
  else if(id==='privacy'){
    setInfo('noinfo');
    setFandq('nofandq');
    setFeedback('nofeedback');
    setPrivacy(id);
    setTerms('noterms');
  }
  
}

  return (
    <div className='mainpart'>
      <ul>
        <li><h3>About Us</h3></li>
        <li className='head'>
        <div><img src='./images/A.T-inks-logo.png' alt='A.T-Inkks'/>
        <h4>A.T-Inks</h4>
        <p><VerifiedSharpIcon className='icon'/>Company verified</p></div>
        </li>
        <li><p>Lorem ipsum dolor sit amet consectetur adipisicdghj mnfgjf<button className='edit'><Edit/></button></p></li>
        <li>
        <ul className='navbar'>
         <li className='info'><button onClick={()=>showDisplay('info')}>Info</button></li>
          <li><button onClick={()=>showDisplay('fandq')}>F&Q</button></li>
          <li><button onClick={()=>showDisplay('feedback')}>Complaints&Feedback</button></li>
          <li><button onClick={()=>showDisplay('privacy')}>Privacy&Policy</button></li>
          <li><button onClick={()=>showDisplay('terms')}>Terms&Conditions</button></li>
        </ul>
        </li>
        <hr/>
       <li>
         <div className={`${info}`}>
           <div>
             <ul>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur, corrupti</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure similique! Sapiente</li>
               <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sed natus eius iste deser</li>
             </ul>
           </div>
           <div>
           <ul>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur, corrupti</li>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure similique! Sapiente</li>
               <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sed natus eius iste deser</li>
             </ul>
           </div>
         </div>
         <div className={`${fandq}`}>
           <h1>F & Q</h1>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>

         </div>
         <div className={`${feedback}`}>
         <h1>Complaints and Feedback</h1>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</div>
         </div>
         <div className={`${privacy}`}>
         <ul className='policy'>
              <li><h3>Your Privacy Matters</h3></li>
              <li><h5>1.Introduction<Edit className='edit'/></h5></li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores suscipit harum nulla, minus distinctio, saepe molestias quia quos non accusamus sed necessitatibus corporis nam eos illum! Magnam, corporis rerum!</li>
           </ul>
           <ul className='table'>
             <li><h5>Table of Content</h5></li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing Quaerat sapiente nostrum, fugiat tenetur, ullam</li>
           </ul>
         </div>
         <div className={`${terms}`}>
           
         </div>

       </li>
      </ul>
    </div>
  )
}

export default Main