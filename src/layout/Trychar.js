import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts"
import axios from 'axios'
import { Urlend} from '../API/Url'
import './TryChart.css';
import Selecty from './Selecty';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import 'bootstrap/dist/css/bootstrap.min.css';



const Trychar = () => {

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);

const [interval , setInterval] = useState()

    const [options, setOptions]=useState({})

    const [series,setSeries]=useState([])

   const [startDate, setStartDate]=useState("2023-01-19")
   const [endDate, setEndDate]=useState("2023-01-25")

   const onST=(e)=>{
    setStartDate(e.target.value)
   }

   const onEn=(e)=>{
    setEndDate(e.target.value)
   }


    useEffect(()=>{
        const variables = {
          "startDate":startDate,
          "endDate":endDate,
          "interval":"%Y-%m-%d",
          "latlong":[ 29.957992744209893, 31.26761617550828]
        }
        const avgTemp=[];
        const id=[];
        
        const temp =async()=>{await axios.post(`${Urlend}`,variables)
        .then(response=>{
            console.log("response",response);
            response.data.track.map(item =>{
                avgTemp.push(item.avgTemp)
                id.push(item._id)
            })
            setOptions(
                {
                    chart: {
                        id: "basic-bar",
                    },
                    xaxis: {
                        categories: id,
                        axisTicks:{
                          color: "#cfcfcf"
                        },
                        axisBorder:{
                          color: "black"
                        },
                        tooltip:{
                          colors:"#ffcc00"
                        }
                    },
                    yaxis: {
                        show: true,
                        showAlways: true,
                        showForNullSeries: true,
                        seriesName: undefined,
                        opposite: false,
                        reversed: false,
                        logarithmic: false,
                        logBase: 10,
                        tickAmount: 10,
                        min: 0,
                        max: 50,
                        forceNiceScale: false,
                        floating: false,
                        decimalsInFloat: undefined,
                        fill:"#8884d8",
                        labels: {
                          show: true,
                          align: 'right',
                          minWidth: 0,
                          maxWidth: 200,
                          style: {
                              colors: [],
                              fontSize: '14px',
                              fontFamily: 'Helvetica, Arial, sans-serif',
                              fontWeight: 350,
                              cssClass: 'apexcharts-yaxis-label',
                              
                          },}
                    },
                }
            )
            setSeries([{
                name: "series-1",
                data: avgTemp
            }])
        })
        .catch(error=>{console.log({error});})}
        temp()

    },[startDate,endDate])

  return (
    <div className='chart'>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      {/* <Selecty /> */}
      <div>
      <DropdownButton id="dropdown-basic-button" title="Select button" >
      <Dropdown.Item > Day </Dropdown.Item>
      <Dropdown.Item > Month </Dropdown.Item>
      <Dropdown.Item > Year </Dropdown.Item>
    </DropdownButton>
      </div>
      <div style={{display:"flex"}}>
        <input type='date' id="startDate" onChange={onST} value={startDate}/>
        <input type='date' id="endDate" onChange={onEn} value={endDate}/>
      </div>
      </div>

        <h3 className='charttitle'>Average Temperature: <span> Cairo , Egypt</span></h3>
        <Chart
              options={options}
              series={series}
              type="bar"
              width="800"
              style={{color:"blue"}}
              className="chart"
        />
    </div>
  )
}

export default Trychar