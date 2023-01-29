import React, { useState } from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './edit.scss';

const EditContact = () => {
  
  return (
    <div className='title'>
      <ui>
        <li>
        <ArrowBack/>
        <h5>Contacts</h5>
        </li>
        <li>
          <span>Please Provide Emails And Contacts</span>
        </li>
        <li>
          <hr/>
        </li>
        <li><label>Email ID</label></li><br/>
        <li><input type='email' placeholder='eg:salesTeam@br.in'/></li><br/>
        <li><button><span>+</span> Add More</button></li>
        <li>
          <hr/>
        </li>
        <li><label>Contacts</label></li><br/>
        <li><input type='email' placeholder='eg:123456789'/></li><br/>
        <li><button><span>+</span> Add More</button></li><br/><br/><br/>
        <li><button>Save</button></li>
      </ui>
    </div>
  )
}

export default EditContact;