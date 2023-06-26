
import "react-native";
import { removeDecimal } from "../src/utils/Helper";


describe("function testing directly", () => {
    test("remove decimal function calling", () => {
      const input = removeDecimal(15.4);
      const output = "15º";
      expect(input).toEqual(output);
    });
  });

  