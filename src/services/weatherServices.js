import endPoints from "../redux/constant/endPoints"
import { fetchApi } from "../utils/Helper"


 export const getWeatherInfoCall = async (params) => {
    const response = await fetchApi({ method: "GET", endPoint: endPoints.GET_WEATHER, params})
    return response
}
