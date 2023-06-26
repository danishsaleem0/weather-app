const REQUEST = "_REQUEST";
const SUCCESS = "_SUCCESS";
const FAILED = "_FAILED";

const actionTypes = {
    // weather action types
  GET_WEATHER_INFO: "GET_WEATHER_INFO",
  NETWORK_ERROR: "NETWORK_ERROR"
};
export { REQUEST, FAILED, SUCCESS };
export default Object.freeze(actionTypes);
