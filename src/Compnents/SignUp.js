import React, { useState } from 'react'
import './Sign.css';
import axios from "axios"
import { Link } from 'react-router-dom';
import { Urls } from '../API/Url'
import { Url }from "../API/Url"
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
  const navigate=useNavigate()

  const [input , setInput]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const onSave=(e)=>{
    const {name,value}= e.target
    setInput({...input,[name]:value})
  }

  
  const onHandler=()=>{
    axios.post(`${Url}/users/`,input).then((response) => {
      navigate("/WeatherPage")
  })
  .catch((Error)=>{
    console.log({Error})
  })
  }


  return (
    <div className='SignUp-form'>
      <div className='forms'>
        <h3> Sign UP </h3>
        <div className='sign-input'>
            <label>name :</label>
            <input type="text" placeholder='enter your name' name="name" onChange={onSave} value={input.name}/>
            <label>email :</label>
            <input type="email" placeholder='enter your email'name="email" onChange={onSave} value={input.email}/>
            <label>password :</label>
            <input type="password" placeholder='enter your password'name="password" onChange={onSave} value={input.password}/>
            <label>confirm  password :</label>
            <input type="password" placeholder='enter your confirm  password' name="confirmPassword"  onChange={onSave} value={input.confirmPassword}/>
            <div className='buttons'>
              <button onClick={onHandler}> Sign Up </button>
              <Link to="/">
                <button className='canbtn'> cancel </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp