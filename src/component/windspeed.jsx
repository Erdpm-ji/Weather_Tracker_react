import React from 'react'
import Style from './Weather.module.css'

const windspeed = () => {
  return (
    <>
        <div className={Style.col}>
                    <WiDayWindy className={Style.weatherdataicon} />
                    <div className={Style.weathervalue}>
                        <p>{weatherData.windspeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
    </>
  )
}

export default windspeed