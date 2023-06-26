import React from "react";
import moment from "moment";
import {BASE_URL} from "@env"
import axios from "axios";

// get token
const getToken = async () => {
  // const token = await localStoreUtil.get_data("token")
  // return token
};

//  api helper
export const fetchApi = async ({
  method,
  endPoint,
  token,
  data,
  params,
  formData,
}) => {
  const headers = {};
  if (token) headers.token = await getToken();

  if (formData) {
    headers["Content-Type"] = "multipart/form-data";
  } else {
    headers["Content-Type"] = "application/json";
  }

  var config = {
    method,
    url: `${BASE_URL}/data/${endPoint}`,
    headers,
  };
  if (params) config.params = params;
  return await axios(config);
};

//  today date and day
export const currentDate = () => {
  const currentDate = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return formattedDate;
};

// convert unix timestamp
export const timeConverter = (unixTime,weekdays= false) => {
  const hours = moment.unix(unixTime).format("hA");
  const days = moment.unix(unixTime).format("dddd");
  if(weekdays) {
     return days
  }
  return hours;
};
// remove decimal 
export const removeDecimal = (number) => {
  return number.toFixed(0) + "º";
};
