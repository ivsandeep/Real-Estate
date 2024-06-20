import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
// import axios from "axios"
import './signUpPage.scss'
import ApiRequest from '../login/ApiRequest'
const SignUpPage = () => {
  const [error, setError]=useState("")
  const [isLoading, setIsLoading]=useState(false)

  const navigate=useNavigate();
  const handleSubmit= async(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData=new FormData(e.target);
    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")
    console.log(username, email, password);
    try{
      const res= await ApiRequest.post("/auth/register",{
        username,email,password
      });
      console.log(res.data);
      navigate("/login");

    }catch(err){
      // console.log(err);
      setError(err.response.data.message);
    } finally{
      setIsLoading(false);
    }
  }
  return (
    <div className='signupPage'>
      <div className='formContainer'>
        <form  onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name='username' type='text' placeholder='Username'/>
          <input name='email' type='text' placeholder='Email'/>
          <input name='password' type='password' placeholder='Password'/>
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to='/login'>Do you have an account?</Link>
          

        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt=''/>
      </div>
    </div>
  )
}

export default SignUpPage