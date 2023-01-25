import React, { useState , useEffect} from 'react'
import ReactApexChart from "react-apexcharts";
import axios from 'axios'
import { Urlend} from '../API/Url'
import './Min.css';



const MinMax = () => {
    const[options , setOptions]=useState({
       
    })

    const[series,setSeries]=useState([
        
    ])


    useEffect(()=>{
        const variables = {
            startDate:"2023-1-16",
             endDate:"2023-1-24",
             interval:"%Y-%m-%d",
             latlong:[ 29.957992744209893, 31.26761617550828]
        }
        const Max=[];
        const Min=[];
        const id=[];

       const mixmin= async()=>{ await axios.post(`${Urlend}`,variables)
        .then(response=>{
            console.log("response",response);
            // eslint-disable-next-line array-callback-return
            response.data.track.map(item =>{
                Max.push(item.maxmumTemp)
                Min.push(item.minumTemp)
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
                name: 'Max',
                data: Max
            }, 
            {
                name: 'Min',
                data: Min
            }])
        })
        .catch(error=>{console.log({error});})}
        mixmin()

    },[])


  return (
    <div className='chartm'>
        <h3 className='charttitlem'>Average High/Low Temperature:<span> Cairo , Egypt</span> </h3>
        <ReactApexChart options={options} series={series} type="bar" height={600}  width={800}  className="chartsm"/>
    </div>
  )
}

export default MinMax