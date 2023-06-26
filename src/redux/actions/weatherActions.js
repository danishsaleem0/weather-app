import actionTypes, { FAILED, REQUEST, SUCCESS } from "../constant/actionTypes";

//  get weather action
export const getWeatherRequest = (data) => {
  return {
    type: actionTypes.GET_WEATHER_INFO + REQUEST,
    payload: data,
  };
};

export const getWeatherSuccess = (data) => {
  return {
    type: actionTypes.GET_WEATHER_INFO + SUCCESS,
    payload: data,
  };
};
export const getWeatherFailed = (error) => {
  return {
    type: actionTypes.GET_WEATHER_INFO + FAILED,
    payload: error,
  };
};

// network action
export const networkError = (error) => {
  return {
    type: actionTypes.NETWORK_ERROR,
    payload: error,
  };
};
