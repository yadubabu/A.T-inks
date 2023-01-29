import React from 'react';
import './style.scss';
import ArrowBack from '@mui/icons-material/ArrowBack';


const SocialMediaLinks = () => {
    // const [sty,setSty]=('socialmedia');
    // const closePop=()=>{
    //     setSty('closesocial');
    // }
  return (
    <div className='socialmedia'>
    <ul>
        <li><button><ArrowBack/></button><h3>Social Media & Links</h3></li>
        <li className='cap'>Please provide the links to the social media accounts & website of the company</li>
        <li>Instagram</li>
        <li><input type='text' placeholder='eg:www.instagram.com/companyname'/></li>
        <li>Facebook</li>
        <li><input type='text' placeholder='eg:www.facebook.com/companyname'/></li>
        <li>Twitter</li>
        <li><input type='text' placeholder='eg:www.twitter.com/companyname'/></li>
        <li>Website</li>
        <li><input type='text' placeholder='eg:www.website.com/companyname'/></li>

    </ul>
    </div>
  )
}

export default SocialMediaLinks