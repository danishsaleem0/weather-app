
import "react-native";
import React from "react";
import { currentDate } from "../src/utils/Helper";
import moment from "moment";


describe("function testing directly", () => {
    test("current date function calling", () => {
    //   const input = removeDecimal(15.4);
      const date = new Date(); 
      const input = currentDate()
      const output = moment(new Date()).format("dddd, MMMM D");
      expect(input).toEqual(output);
    });
  });

  