import { useDispatch, useSelector } from "react-redux";
import { getWeatherRequest } from "../../redux/actions/weatherActions";
import { WEATHER_API_KEY } from "@env";

export default () => {
  const dispatch = useDispatch();
  const { loading,weatherData } = useSelector((state) => state?.weatherReducer);
  
  const fetchWeather = (lat,lon) => {
    
  const params = {
    lat,
    lon,
    appid: WEATHER_API_KEY,
    exclude: "minutely",
    units: "metric",
  }
    dispatch(getWeatherRequest(params))
    
  }
  return {
    loading,
    weatherData,
    fetchWeather
  };
};
