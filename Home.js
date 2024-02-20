import React, { useEffect, useState } from 'react'
import './style.css'

function Home() 
{
    const[data,setData]=useState({
        celcius:10,
        name:'London',
        humidity:10,
        speed:2
    })
    useEffect(()=>{
        const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        axios.get(apiUrl)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    },[])


    return (
        <div className='container'>
            <div className='weather'>
                <div className='search'>
                    <input type='text' placeholder='Enter Your Name' spellcheck="false" />
                    <button><img src="images/search.png" alt=''></img></button>
                </div>
                <div class="winfo">
                    <img src="images/rain.png" class="icon" alt='' />
                    <h1 class="temp"> 22°c</h1>
                    <h2 class="city">London</h2>
                    <div class="details">
                        <div class="col">
                            <img src="images/humidity.png" alt='' />
                            <div>
                                <p class="humidity">50%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="images/wind.png"  alt=''/>
                            <div>
                                <p class="wind">50 km/hr</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home