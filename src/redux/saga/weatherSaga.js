import { Alert } from "react-native";
import { getWeatherInfoCall } from "../../services/weatherServices";
import {
  getWeatherFailed,
  getWeatherSuccess,
  networkError,
} from "../actions/weatherActions";
import actionTypes, { REQUEST } from "../constant/actionTypes";
import { takeLatest, put } from "redux-saga/effects";

function* getWeather({ payload }) {
  try {
    const response = yield getWeatherInfoCall(payload);
    if (response.status === 200) {
      yield put(getWeatherSuccess(response.data));
    }
  } catch (error) {
    console.log(error, "catch error");
    const { response, message } = error;
    if (message === "Network Error") {
      Alert.alert(message);
      yield put(networkError(message));
      return;
    }
    yield put(getWeatherFailed(message));
    Alert.alert(message);
  }
}

function* WeatherSaga() {
  yield takeLatest(actionTypes.GET_WEATHER_INFO + REQUEST, getWeather);
}
export default WeatherSaga;
