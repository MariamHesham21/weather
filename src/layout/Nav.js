import React from 'react'
import { BiLogIn } from "react-icons/bi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useNavigate } from 'react-router';



const Nav = () => {
  const navigate=useNavigate()
  const onLog=()=>{
    localStorage.removeItem("Islogged")
      navigate("/")
  }
  return (
    <div className='nav'>
        <h1> <TiWeatherPartlySunny/> Weather App </h1>
        <button onClick={onLog}> <BiLogIn className='icon'/> LogOut </button>
    </div>
  )
}

export default Nav