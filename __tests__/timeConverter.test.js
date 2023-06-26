/**
 * @format
 */

import "react-native";
import React from "react";
import { timeConverter } from "../src/utils/Helper";
import moment from "moment";

describe("function testing directly", () => {
  test("time converting function calling", () => {
    const time = new Date().getTime();
    const input = timeConverter(time);
    const output = moment.unix(time).format("hA");
    expect(input).toEqual(output);
  });
});

describe("function testing directly", () => {
  test("time converting function calling with days", () => {
    const time = new Date().getTime();
    const input = timeConverter(time, (days = true));
    const output = moment.unix(time).format("dddd");
    expect(input).toEqual(output);
  });
});
