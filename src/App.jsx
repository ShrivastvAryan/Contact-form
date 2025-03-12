import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="bg-blue-50 w-screen h-screen">
      <div className="h-3/4 w-2/4 bg-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <p className="text-center font-bold text-2xl">Contact Form</p>
      <form>
        <div className='w-full h-1/3'>
          <label htmlFor='username'>Username</label>
          <input type='text' name="username" id="username" autocomplete="off" required className='bg-blue-100'/>
        </div>

        <div className='w-full h-1/3 m-2'>
          <label htmlFor='email'>Email</label>
          <input type='text' name="email" id="email" autocomplete="off" required className='bg-blue-100'/>
        </div>

        <div className='w-full h-1/3'>
          <label htmlFor='message'>Message</label>
          <textarea
          name="message"
          id="message"
          cols="30"
          rows='5'
          className='p-2 m-2 bg-blue-100'
          />
        </div>

      </form>
      </div>
    </div>
    </>
  )
}

export default App
