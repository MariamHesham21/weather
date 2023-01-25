import React from 'react'
import { PieChart, Pie, Tooltip} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';


const data=[
    {name:"face",value:20000},
    {name:"inst",value:14000},
    {name:"snap",value:10000},
]

const dataa = [
    {
      name: 'Page A',
      pv: 13,
      amt: 240,
    },
    {
      name: 'Page B',
      pv: 13,
      amt: 221,
    },
    {
      name: 'Page C',
      pv: 17,
      amt: 10,
    },
    {
      name: 'Page D',
      pv: 22,
      amt: 20,
    },
    {
      name: 'Page E',
      pv: 25,
      amt: 8,
    },
    {
      name: 'Page F',
      pv: 27,
      amt: 2,
    },
    {
      name: 'Page G',
      uv: 349,
      pv: 4,
      amt: 5,
    },
  ];

  // const  xyValues = [
  //   {x:50, y:7},
  //   {x:60, y:8},
  //   {x:70, y:8},
  //   {x:80, y:9},
  //   {x:90, y:9},
  //   {x:100, y:9},
  //   {x:110, y:10},
  //   {x:120, y:11},
  //   {x:130, y:14},
  //   {x:140, y:14},
  //   {x:150, y:15}
  // ];
  
  // new Chart("myChart", {
  //   type: "scatter",
  //   data: {
  //     datasets: [{
  //       pointRadius: 4,
  //       pointBackgroundColor: "rgb(0,0,255)",
  //       data: xyValues
  //     }]
  //   },
  //   options: {
  //     legend: {display: false},
  //     scales: {
  //       xAxes: [{ticks: {min: 40, max:160}}],
  //       yAxes: [{ticks: {min: 6, max:16}}],
  //     }
  //   }
  // });
const Body = () => {

  return (
    <div className='Body'>
        <h2> Cairo ,<span> Egypt</span></h2>
        <p> July is the hottest month in Cairo with an average temperature of 28°C (82°F) and the coldest is January at 13.5°C (56°F) with the most daily sunshine hours at 14 in June. The wettest month is January with an average of 14.5mm of rain..</p>
        <div>
            <h3> social media </h3>
           <div>
           <PieChart width={1000} height={400}>
            <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            />
            
            <Tooltip />
           </PieChart>

           </div>
           <div>
           <BarChart
          width={500}
          height={300}
          data={dataa}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
           </BarChart>
           </div>

           
        </div>
    </div>
  )
}

export default Body