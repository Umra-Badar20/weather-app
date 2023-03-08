import axios from 'axios'
import React, { useState } from 'react'

export default function Weather() {
  let [weather,setWeather]=useState(null)
  let [cityName, setCityName] = useState(null)

  let handle=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
    
      .then((res)=>{
        setWeather(res.data)
        console.log(res)
      })
    .catch((err)=>{
    console.log(err)
    })
  }

    return (
    <div>
     <h1>Weather Application</h1>
    <form onSubmit={handle}>
        <input type="text" placeholder='Type your City Name here' onChange={(e)=>{
            setCityName(e.target.value)
          
        }}/>
        <button type='submit'>Check Weather</button>
    </form>

    {
      (weather===null) ? null :
      <div className='weathers'>
      <h2>Temp Max : {weather.main.temp_max}°C</h2>
      <h2>Temp Min : {weather.main.temp_min}°C</h2>
      <h2>Feels Like : {weather.main.feels_like}°C</h2>
      <h2>Pressure : {weather.main.pressure}°C</h2>
      <h2>Humidity : {weather.main.temp_max}°C</h2>

      </div>
    }
    </div>
  )
}
// import axios from 'axios'
// import React, { useState } from 'react'

// export default function Weather() {
//   let [weatherdata,setWeatherData]=useState(null)
//   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
//   // axios.get(`https://api.openweathermap.org/data/3.0/onecall?q=karachi&exclude={part}&appid=$52340b82028bd24c1d9186e4174d7656`)
//   .then((res)=>{
//     console.log(res.data)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
  
//   return (
//     <div>
//     <form>
//        <input type="text" onChange={(e)=>
//       console.log(e.target.value)
//       } />
//     </form>
    
//     </div>
//   )
// }

