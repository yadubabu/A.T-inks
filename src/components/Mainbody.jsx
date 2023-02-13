import React,{useEffect, useState} from 'react';
import '../style/mainbody.scss';
import Edit from '@mui/icons-material/ModeEditOutline';
import Delete from '@mui/icons-material/DeleteForever';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Developer from '@mui/icons-material/DeveloperBoard';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Media from '@mui/icons-material/MediaBluetoothOnSharp';
import Statement1 from '@mui/icons-material/FormatQuoteSharp';
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';



const Mainbody = ({contacts,address,updateAddress,editStoreContact,addContact,posts,addPost}) => {
  console.log(posts);
  const [info,setInfo]=useState('info');
  const [fandq,setfandq]=useState('none');
  const [feedback,setfeedback]=useState('none');
  const [privacy,setPrivacy]=useState('none');
  const [terms,setTerms]=useState('none');
  const [contact,setContact]=useState('none');
  const [add,setAdd]=useState('none');
  const [post,setPost]=useState('none');
  const [addContacts,setAddContacts]=useState('none')
  const [editContacts,setEditContacts]=useState('none');

  const [data,setData]=useState([]);
  const [input,setInput]=useState();
  const [email,setEmail]=useState([]);
  const [phone,setPhone]=useState([]);
  const [title,setTitle]=useState();
  const [newAddress,setNewAddress]=useState({});
  const popUp=(id)=>{
    if(id==='contact'){
      setContact('contact');
      setAdd('none');
      setPost('none');
      setEditContacts('none');
      setAddContacts('none');
    }else if(id==='add'){
      setAdd('add');
      setContact('none');
      setPost('none');
      setEditContacts('none');
      setAddContacts('none');

    }
    else if(id==='editContacts'){
      setEditContacts('editContacts');
      setAdd('none');
      setContact('none');
      setPost('none');
      setAddContacts('none');
    }
    else if(id==='addContacts'){
      setAddContacts('addContacts');
      setAdd('none');
      setContact('none');
      setPost('none');
      setEditContacts('none');

    }
    else if(id==='post'){
      setPost('post');
      setEditContacts('none');
      setAddContacts('none');
      setAdd('none');
      setContact('none')
    }
  }
const close=()=>{
  setAdd('none');
  setContact('none');
  setPost('none');
  setEditContacts('none');
  setAddContacts('none');
}
  const navigation=(key)=>{
    if(key==='info'){
      setInfo('info');
      setfandq('none');
      setfeedback('none');
      setPrivacy('none');
      setTerms('none');

    }
    else if(key==='fandq'){
      setfandq('fandq');
      setInfo('none');
      setfeedback('none');
      setPrivacy('none');
      setTerms('none');    }
    else if(key==='feedback'){
        setfandq('none')
        setInfo('none');
        setPrivacy('none');
        setTerms('none');   
        setfeedback('feedback')
       }
    else if(key==='privacy'){
          setfandq('none')
          setInfo('none');
          setfeedback('none');
          setPrivacy('privacy');
          setTerms('none');    }  
          else if(key==='terms'){
            setfandq('none')
            setInfo('none');
            setfeedback('none');
            setPrivacy('none');
            setTerms('terms');    }
  }

 const addEmail=()=>{
   setEmail([...email,input])
  }
  const addPhone=()=>{
    setPhone([...phone,input])
   }
  const submitContact=(e)=>{
    if(email!=='' && phone !=='' && title!==''){

      setData([...data,{title,email,phone}])
      setAddContacts('none')
     setContact('contact')
    }else{
      alert('All feilds are mandatory')
    }
    }
 useEffect(()=>{
   if(data){
     addContact(data);
     
   }
 
 },[]);

 const addMorePosts=()=>{
   if(post !==''){
     addPost(post);
     setPost('')
   }
 }
 
 const editAddress=(e)=>{
   console.log(newAddress);
   if([e.target.name] !== ''){
     updateAddress({newAddress});
   }
   
 }
  return (
    <div className='main'>
      <div className={`${contact}`}><ArrowBack className='arrow' onClick={close} /><h5>Contacts</h5>
      {data.length>1 ? (<button style={{display:'disable',opacity:'0.5'}}>+Add More</button>):(<button className='edit' id='addContacts' onClick={e=>popUp(e.target.id)}>+Add More</button>
)}
        <p className='sales'><h5>{contacts[0].title}<Edit id='editContacts' className='edit' onClick={(e)=>popUp(e.target.id)}/><Delete className='del'/></h5>
          
          {contacts[0].email[0]}/{contacts[0].email[1]}<br/><br/>
          {contacts[0].phone[0]}/{contacts[0].phone[1]}
        </p>
        <p className='data'>
          {data.map(val=>{
            return(
              <div>
                <p>{val.title}<Edit id='editContacts' className='edit' onClick={(e)=>popUp(e.target.id)}/><Delete className='del'/></p>
              <p>{val.email}</p>
              <p>{val.phone}</p>
              </div>
            )
          })}
        </p>
        <button className='save' onClick={close}>Save</button>
     </div>
      <div className={`${add}`}><ArrowBack onClick={close} />Update Address
      <ul>
      <li><input type='text' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='dno'/></li><br/>
      <li><input type='text' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='street'/></li><br/>
      <li><input type='text' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='landmark'/></li><br/>
      <li><input type='text' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='city'/></li><br/>
      <li><input type='text' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='state'/></li><br/>
      <li><input type='number' onChange={(e)=>setNewAddress({...newAddress,[e.target.name]:e.target.value})} name='pin'/></li><br/>
          <button onClick={editAddress}>Update</button>
      </ul>
      </div>
      <div className={`${post}`}><ArrowBack onClick={close} />Add Posts here
      <div>
        <textarea onChange={(e)=>setPost(e.target.value)}/>
        <button onClick={addMorePosts}>Add Post</button>
      </div>
      </div>
     <div className={`${editContacts}`}><ArrowBack onClick={close} />
        Edit Contacts
        <p><h5>Sales Team<Delete/></h5>
          Email:<input type='email' value={contacts[0].email[0]}/>
          <input style={{marginLeft:'43px'}} type='email' value={contacts[0].email[1]}/>
          <br/><br/>
          Phone:<input type='email' value={contacts[0].phone[0]}/>
          <input style={{marginLeft:'43px'}} type='number' value={contacts[0].phone[1]}/><br/>
          <button >Update</button>
        </p>
        </div>
      <div className={`${addContacts}`}><ArrowBack id='editContacts' onClick={(e)=>popUp(e.target.id)} />
          Add More Contacts Here
          <p>Please Provide the company's email & contacts </p><hr/>
          <p>Enter Title</p>
          <p><input type='text' name='title' onChange={(e)=>setTitle(e.target.value)} placeholder='eg:salesteam@br.in'/></p>
          <p>Email ID</p>
          <p><input type='email' name='email' onChange={(e)=>setInput(e.target.value)} placeholder='eg:salesteam@br.in'/></p>
          <p><input type='submit' id='email' value='+Add More' onClick={addEmail}/></p>
          <p>Contact Number</p>
          <p><input type='number' name='phone' placeholder='eg:242346424' onChange={(e)=>setInput(e.target.value)}/></p>
          <p><input type='submit' name='phone' value='Add More' onClick={addPhone}/></p> 

          <button onClick={submitContact}>Save</button> 
      </div>
      <div className='head'>
      <ul>
        <li><h3>About Us</h3></li>
        <li className='head'>
        <div><img src='./images/A.T-inks-logo.png' alt='A.T-Inkks'/>
        <h4>A.T-Inks</h4>
        <p><VerifiedSharpIcon className='icon'/>Company verified</p></div>
        </li>
        <li className='cap'><p>Lorem ipsum dolor sit amet consectetur adipisicdghj mnfgjf<button style={{backgroundColor:'white',color:'red',border:'none'}}><Edit/></button></p></li>
        </ul>      </div>
        <nav className='nav'>
        <ul>
          <li><a id='info' onClick={(e)=>navigation(e.target.id)}>Info</a></li>
          <li><a id='fandq' onClick={(e)=>navigation(e.target.id)}>F & Q</a></li>
          <li><a id='feedback' onClick={(e)=>navigation(e.target.id)}>Complaints & Feedback</a></li>
          <li><a id='privacy' onClick={(e)=>navigation(e.target.id)}>Privacy & Policy</a></li>
          <li><a id='terms' onClick={(e)=>navigation(e.target.id)}>Terms & Conditions</a></li>
        </ul>
      </nav>
      <hr/>
      <div className={`${info}`}>
        <ul className='block'>
          <li>
            <h3>Contacts<Edit className='edit' id='contact' onClick={(e)=>popUp(e.target.id)}/></h3>
            <div><strong>Email:</strong>
              {contacts[0].email.map(val=><div style={{display:'inline'}}>{val}/</div>)}
            </div>
            <div style={{backgroundColor:'tomato',width:'20px',float:'right'}}>+{contacts[0].email.length+contacts[0].phone.length}</div>
            <br/>
            <br/>
            <div className='phone'><strong>Phone:</strong>
              {contacts[0].phone.map(val=><div>{val}/</div>)}
            </div>
          </li>
          <li>
            <h4>Address</h4><Edit className='edit' id='add' onClick={(e)=>popUp(e.target.id)}/>
            <ul className='address'>
              <li>{address.dno}</li>
              <li>{address.street}</li>
              <li>{address.landmark}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
              <li>{address.pin}</li>
            </ul>
          </li>
          <li><h4>Statement</h4><Edit className='edit' id='post' onClick={(e)=>popUp(e.target.id)}/>
          {posts.map(post=>{
            return(<><p className='state'>{post}</p>
            </>)
          })}
          </li>
        </ul>
        <ul className='block'>
           <li>
            <div className='media'><Media/><h4>Social Media & Links<Edit className='edit'/></h4></div>
            <div className='social'>
            <li><TwitterIcon/>Twitter</li>
            <li><InstagramIcon/>Instagram</li>
            <li><FacebookIcon/>Facebook</li>
            <li><PinterestIcon/>Pinterest</li></div>
          </li>
          <li>
            <div><Developer/><h4>Hours of operations</h4><Edit  className='edit' onClick={()=>setPost('Post')}/></div>
            <div><p>You Think it You ink it</p></div>
          </li>
          </ul>
      </div>
      <div className={`${fandq}`}>
        <h3>F & Q</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo ad libero alias repellat quae quam, facilis at delectus quo eius commodi architecto modi molestias vitae eligendi unde eaque?
      </div>
      <div className={`${feedback}`}>
        <h3>Feedback</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo ad libero alias repellat quae quam, facilis at delectus quo eius commodi architecto modi molestias vitae eligendi unde eaque?
      </div>
      <div className={`${privacy}`}>
        <h3>Privacy</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo ad libero alias repellat quae quam, facilis at delectus quo eius commodi architecto modi molestias vitae eligendi unde eaque?
      </div>
      <div className={`${terms}`}>
        <h3>Terms</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et illo ad libero alias repellat quae quam, facilis at delectus quo eius commodi architecto modi molestias vitae eligendi unde eaque?
      </div>
    </div>
  )
}

export default Mainbody