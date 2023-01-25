import React ,{useState}from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Urls } from '../API/Url';
import { Url }from "../API/Url"




const Login = () => { 

  const [input ,setInput]=useState({
    email:"",
    password:""
  })

  const navigate=useNavigate()

  const onSavev=(e)=>{
    const{name,value}=e.target
    setInput({...input,[name]:value})
  }

  const onButton = ()=>{
    axios.post(`${Url}/users/login`,input).then((response) => {
      console.log("response",response)
      // store Islogges in localStore
      localStorage.setItem("Islogged",response.data.token)
      //replace navigate
      navigate("WeatherPage",{replace: true})
    })
    .catch((Error)=>{
      console.log({Error})
    })
  }


  return (
    <div className='login-form'>
      <img src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg" alt="weather"/>
      <div className='form'>
        <h3> Login </h3>
        <div className='inputForm'>
          <label>email</label>
          <input type="email" placeholder='enter your email' name="email" onChange={onSavev} value={input.email}/>
          <label>password</label>
          <input type="password" placeholder='enter your password' name="password" onChange={onSavev} value={input.password}/>
        </div>
        <div>
            <button onClick={onButton}> Login </button>
        </div>
        <div className='sign-links'>
          <div> <Link to="/SignUp">
            <h5> Regster now</h5>
          </Link></div>
          <div>
          <Link to="/Forget">
          <h5> Forget Password? </h5>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Login