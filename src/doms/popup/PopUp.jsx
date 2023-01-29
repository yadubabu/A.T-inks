import React,{useEffect, useState} from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import Delete from '@mui/icons-material/DeleteForever';
import EditContact from '../edit_contact/EditContact';
import './pop.scss';

const PopUp = ({contacts,name}) => {
console.log(contacts);
    const [showPop,setShowPop]=useState(true)
    const [sty,setSty]=useState('popup');
const closePop=()=>{
    setShowPop(false);
    setSty('nopop');
}
const editPop=()=>{
  setSty('editPop')
  
}

  return (
        <div>
          {sty==='editPop' ? (<div className={sty}><EditContact/></div>):(
            <div className={`${sty}`}>
            <div className='title'>
              <button onClick={closePop}><ArrowBack/></button>
              <h3>{name}</h3>
            </div>
            <div className='tag'>dgdgjdghdjkhgkjdfhgd</div>
            <div className='box'>
              <ui>
                <li>
                  <div className='block'><h5>Sales Team</h5><button><Delete className='del'/></button><button onClick={editPop}><Edit/></button></div>
                  <div className='in'>
                    <div>
                    </div>
                    <div><label>Contacts</label>
                    <input type='text' value={contacts.email}/>
                    <input type='text' value={contacts.email}/>
                    </div>
                  </div>
                </li>
                <li><div className='block'><h5>Sales Team</h5><button><Delete className='del'/></button><button onClick={<EditContact/>}><Edit/></button></div>
                  <div className='in'>
                    <div>
                    </div>
                    <div><label>Contacts</label>
                    <input type='text' value={contacts.email}/>
                    <input type='text' value={contacts.email}/>
                    </div>
                  </div></li>
                <li><div className='block'><h5>Sales Team</h5><button><Delete className='del'/></button><button><Edit/></button></div>
                  <div className='in'>
                    <div>
                    </div>
                    <div><label>Contacts</label>
                    <input type='text' value={contacts.email}/>
                    <input type='text' value={contacts.email}/>
                    </div>
                  </div></li>
              </ui>
                <button>Save</button>
            </div>
          </div>
          )}
        </div>
  )
}

export default PopUp