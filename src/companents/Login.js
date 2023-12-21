import React, { useRef, useState } from 'react'
import Header from './Header'
import { Form } from 'react-router-dom'
import { CheckValidDate } from '../utils/validate'

const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage ,setErrorMessage]=useState(null);

  const email= useRef(null);
  const Password= useRef(null);

  

  const handleButtionClick =()=>{

    console.log(email.current.value);
    console.log(Password.current.value);
   const massage = CheckValidDate(email.current.value ,Password.current.value);
   setErrorMessage(massage);

};



  const logglSineInForm = () =>{
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt='logo'/>
        </div>

        <Form onClick={(e)=> e.preventDefault()}className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0
         text-white rounded-xl opacity: 0.7'>
          <h1 className='font-bold text-3xl my-4'>
            { isSignInForm?  "Sign In " : "Sign Up"}
          </h1>
          {!isSignInForm && (
          <input  
          type='text'placeholder='User Name' className='my-2 p-2 w-full bg-gray-700'/>
          )}
          <input ref={email}
          
          type='text'placeholder='Email Address' className='my-2 p-2 w-full bg-gray-700'/>
          <input ref={Password}
          type='password'placeholder='password' className='my-2 p-2 w-full bg-gray-700'/>

          <p className='text-red-500 p-1 text-bold' >{errorMessage}</p>


          <button className=' p-4 my-6 bg-red-700 w-full rounded-xl ' onClick={handleButtionClick}> { isSignInForm?  "Sign In " : "Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={logglSineInForm}  >
          { isSignInForm?  "New To Netflix? Sign Up Now " : "Wellcome"}
            </p>

        </Form>
    </div>
  )
}

export default Login