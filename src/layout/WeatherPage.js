import React from 'react'
import './WeatherPage.css';
import Nav from './Nav';
import Trychar from './Trychar';
import MinMax from './MinMax';
import Selecty from './Selecty';



const WeatherPage = () => {
  return (
    <div className='WeatherPage'>
      
      <Nav/>
      {/* <Selecty/> */}
      <Trychar />
      <MinMax/>
    </div>
  )
}

export default WeatherPage