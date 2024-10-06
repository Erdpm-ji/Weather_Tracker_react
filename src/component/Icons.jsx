import { WiCloudy, WiDayCloudy, WiDaySunny, WiFog, WiNightClear, WiNightCloudy, WiRain, WiShowers, WiSnow, WiThunderstorm } from "react-icons/wi";

const Icons = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightCloudy />,
    "03d": <WiCloudy />,
    "03n": <WiCloudy />,
    "04d": <WiCloudy />,
    "04n": <WiCloudy />,
    "09d": <WiShowers />,
    "09n": <WiShowers />,
    "10d": <WiRain />,
    "10n": <WiRain />,
    "11d": <WiThunderstorm />,
    "11n": <WiThunderstorm />,
    "13d": <WiSnow />,
    "13n": <WiSnow />,
    "50d": <WiFog />,
    "50n": <WiFog />,

}

export default Icons;