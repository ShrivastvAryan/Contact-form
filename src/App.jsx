import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const defaultContactForm={
  username:"",
  emai:"",
  message:"".
};

function App() {

  const[contact,setContact]=useState(defaultContactForm);

  const handleInput=(e)=>{
    const name =e.target.name;
    const value=e.target.value;

    setContact({
      ...contact, //prev data
      [name]:value,
     })

  };

  const handleSubmit=async(e)=>{
    e.preventDefault(); // handle for form submission infos

    try{ 
      const repsonse= await fetch('',{
        method:"POST",
        header:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      });

      if(repsonse.ok){
        setContact(defaultContactForm);
        const data=await rsponse.json();
        console.log(data);
        alert("Message sent sucessfully")
      }

    } catch(error){
      console.log(error)
    }
  }

 
  return (
    <>
    <div className="bg-blue-50 w-screen h-screen">
      <div className="h-3/4 w-2/4 bg-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <p className="text-center font-bold text-2xl">Contact Form</p>
      <form onSubmit={handleSubmit}>
        <div className='w-full h-1/3'>
          <label htmlFor='username'>Username</label>
          <input type='text' name="username" id="username" 
          autoComplete="off" required className='bg-blue-100'
          value={contact.username}
          onChange={handleInput}/>
        </div>

        <div className='w-full h-1/3 m-2'>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" id="email" 
          autoComplete="off" required className='bg-blue-100'
          value={contact.email}
          onChange={handleInput}/>
        </div>

        <div className='w-full h-1/3'>
          <label htmlFor='message'>Message</label>
          <textarea
          name="message"
          id="message"
          cols="30"
          rows='5'
          className='p-2 m-2 bg-blue-100'
          value={contact.message}
          onChange={handleInput}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
      </div>
    </div>
    </>
  )
}



export default App
