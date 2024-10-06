import React, { useEffect, useRef, useState } from 'react'
import Style from './Weather.module.css'
import { IoIosSearch } from "react-icons/io";
import { WiDaySunny, WiDayWindy, WiHumidity } from "react-icons/wi";
import Icons from './Icons';


const Weather = () => {

    const [weatherData, setWeatherData] = useState('');

    const cityname = useRef('');

    const search = async (city) => {
        cityname.current.value = ''
        if (city === '') {
            alert('Enter the city name')
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        alert("Please enter a correct city name.");
                        throw new Error("Invalid city name"); // Stop further execution
                    }
                    return res.json();
                })
                .then(data => {
                    const icon = Icons[data.weather[0].icon] || <WiDaySunny />;
                    setWeatherData({
                        temperature: Math.floor(data.main.temp),
                        city: data.name,
                        humidity: data.main.humidity,
                        windspeed: data.wind.speed,
                        icon: icon
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }

    

    return (<>
        <div className={Style.weather}>
            <div className={Style.searchbar}>
                <input type="text" placeholder='Enter You City Name' ref={cityname} />
                {<IoIosSearch onClick={() => search(cityname.current.value)} />}
            </div>
            {weatherData ? <>
                {weatherData.icon ? (
                    React.cloneElement(weatherData.icon, { className: Style.weathericon })
                ) : (
                    <WiDaySunny className={Style.weathericon} />
                )}
                <p className={Style.temperature}>{weatherData.temperature}°C</p>
                <p className={Style.location}>{weatherData.city}</p>
                <div className={Style.weatherdata}>
                    <div className={Style.col}>
                        <WiHumidity className={Style.weatherdataicon} />
                        <div className={Style.weathervalue}>
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className={Style.col}>
                        <WiDayWindy className={Style.weatherdataicon} />
                        <div className={Style.weathervalue}>
                            <p>{weatherData.windspeed} km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </>

                : <></>
            }
        </div>
    </>
    )
}

export default Weather