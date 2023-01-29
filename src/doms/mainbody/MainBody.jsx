import React,{useState} from 'react';
import './mainbody.scss';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import Contacts from '@mui/icons-material/ContactsSharp';
import Address from '@mui/icons-material/HomeSharp';
import Hours from '@mui/icons-material/HourglassTopSharp';
import Media from '@mui/icons-material/MediaBluetoothOnSharp';
import Statement1 from '@mui/icons-material/FormatQuoteSharp';
import Mail from '@mui/icons-material/MailOutlineSharp';
import Phone from '@mui/icons-material/Phone';
import PopUp from '../popup/PopUp';
import EditAddress from '../address/EditAddress';
import SocialMedia from '../SocialMediaLinks';
import HoursOfOperations from '../HoursOfOperations';
import Statement from '../Statement';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const MainBody = ({contacts,address,addContacts,editAddress}) => {
  
const [pop,setPop]=useState(false);
const [editAdd,setEditAdd]=useState(false);
const [statement,setStatement]=useState(false);
const [hours,setHours]=useState(false);
const [social,setSocial]=useState(false);

const showPop=()=>{
    setPop(true);
  }
  
  return (
    <div className='mainbody'>
            {pop === true ? <PopUp contacts={contacts} addContacts={addContacts} name='Contacts' id='popup'/> : ''}
            {editAdd === true ? <EditAddress address={address}/>:''}
            {statement ===true ? <Statement/>:''}
            {hours ===true ? <HoursOfOperations/>:''}
            {social === true ? <SocialMedia/>:''}
      {/* <div className='head'>
        <h2>
          About Us
        </h2>
      </div>
      <div>
        <ul>
          <li><img src='./images/A.T-inks-logo.png' alt='A.T-Inkks'/></li>
          <li><VerifiedSharpIcon className='icon'/></li>
          <li><p>Company verified</p></li>
        </ul>
      </div>
      <div><p>Lorem ipsum dolor sit, amet consectetur ipsam exercitationem.<Edit className='edit'/></p></div> */}
      {/* <div className='menu'>
        <ul>
          <li className='info'>Info</li>
          <li>F&Q</li>
          <li>Complaints & Feedback</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div> */}
      <hr/>
      <div className='blocks'>
        <ul>
          <li>
            <div className='contacts'>
            <div>
              <Contacts/>Contacts<button className='editBtn' onClick={showPop}><Edit/></button>
            </div> 
            <div className='email'>
              <Mail/>{contacts.email}
              <span className='noOfContacts'>+{contacts.email.length+contacts.phone.length}</span><p></p>
            </div>
            <div className='phone'>
              <Phone/>{contacts.phone}<span>/</span>{contacts.phone}
            </div>
            </div>
          </li>
          <li>
            <ul>
            <li className='add'><Address/>Address<button className='editBtn' onClick={()=>setEditAdd(true)}><Edit className='edit'/></button></li>
              <li>{address.dno}</li>
              <li>{address.street}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
            </ul>
          </li>
          <li className='hours'><Hours/>Hours of Operations<button className='editBtn' onClick={()=>setHours(true)}><Edit className='edit' id='edit'/></button></li>
        </ul>
      </div>
      <div className='blocks'>
        <ul>
          <li>
            <div><Media/>Social Media & Links<button onClick={()=>setSocial(true)}><Edit className='edit' id='edit'/></button></div>
            <div className='social'><li><TwitterIcon/>Twitter</li>
            <li><InstagramIcon/>Instagram</li>
            <li><FacebookIcon/>Facebook</li>
            <li><PinterestIcon/>Pinterest</li></div>
          </li>
          <li>
            <div><Statement1/>Statement<button onClick={()=>setStatement(true)}><Edit className='edit' id='edit'/></button></div>
            <div><p>You Think it You ink it</p></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainBody