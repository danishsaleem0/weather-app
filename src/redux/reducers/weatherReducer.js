import actionTypes, { FAILED, REQUEST, SUCCESS } from "../constant/actionTypes";

const initialState = {
  loading: false,
  error: false,
  errorText: "",
  networkError: false,
  weatherData: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    
    //  fetch weather
    case actionTypes.GET_WEATHER_INFO + REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_WEATHER_INFO + SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorText: "",
        weatherData:action.payload
      };

    case actionTypes.GET_WEATHER_INFO + FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        errorText: action.payload,
      };

    //  network error
    case actionTypes.NETWORK_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
        errorText: "",
        networkError: true,
      };

    // logout

    default:
      return state;
  }
};



export default weatherReducer;
