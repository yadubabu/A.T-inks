import React,{useState} from 'react';
import Edit from '@mui/icons-material/ModeEditOutlineSharp';
import './main.scss';


const Main = ({contacts,setContacts}) => {
    const [key,setKey]=useState('none');
    const [addContacts,setaddContacts]=useState('none');
   const [reference,setReference]=useState();
    const editContacts=()=>{
        setKey('none');
        setaddContacts('AddContacts')
    }
    const changeHandler=(e)=>{
        setReference({...reference,[e.target.name]:e.target.value})
    }
    const addContact=()=>{
        setContacts([...contacts,reference]);
    }
    console.log(contacts);
  return (
    <div><h3>Contacts</h3>
        <div className={`${addContacts}`}>
            Add More Contacts
            {contacts.length>4 ? ()=>alert('you add only 3 contacts'):(<div>
                    <input type='email' name='email' onChange={changeHandler}/>
                    <input type='text' name='phone' onChange={changeHandler}/>
                    <input type='button' value='Add More' onClick={addContact}/>
                </div>)}
        </div>
        <div className={`${key}`}>
            <div>
            {contacts.map(contact=>
            <div>{contact.email}<Edit onClick={editContacts}/></div>)}
            {contacts.map(contact=>
            <div>{contact.phone}</div>)}
            </div>
        </div>
        {contacts.map(contact=>
        <div>{contact.email}<Edit onClick={()=>setKey('Contacts')}/></div>)}
    </div>
  )
}

export default Main