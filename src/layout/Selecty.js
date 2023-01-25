import React  from 'react'
import './Selecty.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Selecty = () => {
    
  return (

    <div className='select'>
    <DropdownButton id="dropdown-basic-button" title="Select button" >
      <Dropdown.Item > Day </Dropdown.Item>
      <Dropdown.Item > Month </Dropdown.Item>
      <Dropdown.Item > Year </Dropdown.Item>
    </DropdownButton>

    </div>
  )
}

export default Selecty