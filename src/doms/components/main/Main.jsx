import React,{useEffect, useState} from 'react';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Media from '@mui/icons-material/MediaBluetoothOnSharp';
import Statement1 from '@mui/icons-material/FormatQuoteSharp';
import Mail from '@mui/icons-material/MailOutlineSharp';
import Phone from '@mui/icons-material/Phone';
import Popup from '../popup/Popup';
import Delete from '@mui/icons-material/DeleteForever';

import ArrowBack from '@mui/icons-material/ArrowBack';




import './main.scss'

const Main = ({email,phone,editAddress,address}) => {
  const [sty,setSty]=useState('none');
  const [editaddress,setEditaddress]=useState('none');
  const [post,setPost]=useState('none');
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
      
      <div className={`${sty}`}>
        <div><div><ArrowBack onClick={()=>setSty('none')}/></div>
        <div className='tag'>Please provide the company's email & contacts</div></div>
            <div className='box'>
              <ul>
                <li>
                  <div><h4>Sales Team</h4><Delete className='del'/><Edit className='edit' /></div>
                  <div>{email.map(email=><>{email}/</>)}</div>
                  <div>{phone.map(phone=><>{phone}/</>)}</div>
                </li>
                <li>
                  <div><h4>Sales Team</h4><Delete className='del'/><Edit className='edit'/></div>
                  <div>{email.map(email=><>{email}/</>)}</div>
                  <div>{phone.map(phone=><>{phone}/</>)}</div>
                </li>
                <li>
                  <div><h4>Sales Team</h4><Delete className='del'/><Edit className='edit'/></div>
                  <div>{email.map(email=><>{email}/</>)}</div>
                  <div>{phone.map(phone=><>{phone}/</>)}</div>
                </li>
              </ul>
                <button>Save</button>
            </div>
      </div>
      <div className={`${editaddress}`}>
      <ArrowBack onClick={()=>setEditaddress('none')}/>
      </div>
      <div className={`${post}`}>
      <ArrowBack onClick={()=>setPost('none')}/>
      </div>
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
         <li className='info'><button onClick={()=>showDisplay('info')}><span>Info</span></button></li>
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
               <li>
                 <h4>Contacts<Edit className='edit' onClick={()=>setSty('Contacts')} /></h4>
                 <label>Email:</label>{email.map(mail=><div>{mail}</div>)}<span className='noOfEmails'>+{email.length}</span><br/>
                 <div className='phone'><label>Phone:</label>{phone.map(phone=><>{phone}/</>)}</div>
               </li>
               <li className='address'><h4>Address<Edit className='edit' onClick={()=>setEditaddress('Address')}/></h4><br/>
               {address.dno}<br/>
               {address.street}<br/>
               {address.city}<br/>
               {address.state}
               </li>
               <li><h4>Hours of Operations<Edit className='edit'/></h4>
               <p>Monday to Friday:9:00 AM to 6:00 PM</p>
               </li>
             </ul>
           </div>
           <div>
           <ul>
           <li>
            <div><Media/><h4>Social Media & Links<Edit className='edit'/></h4></div>
            <div className='social'>
            <li><TwitterIcon/>Twitter</li>
            <li><InstagramIcon/>Instagram</li>
            <li><FacebookIcon/>Facebook</li>
            <li><PinterestIcon/>Pinterest</li></div>
          </li>
          <li>
            <div><Statement1/>Statement<Edit  className='edit' onClick={()=>setPost('Post')}/></div>
            <div><p>You Think it You ink it</p></div>
          </li>
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