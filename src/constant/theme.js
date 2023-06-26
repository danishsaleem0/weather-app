import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "rgba(0, 16, 38, 0.6 )",
  secondary: ["#08244F", "#134CB5", "#0B42AB"],
  textColor: "#ffffFf",
  black: "#000000",
  lightTextColor: "#A7A7A7",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius_sm: 4,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,
  h55: 55,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  Bold55: {
    fontFamily: "Inter-Bold",
    fontSize: RFValue(SIZES.h55),
  },

  Bold14: {
    fontFamily: "Inter-Bold",
    fontSize: RFValue(SIZES.h14),
  },

  SemiBold25: {
    fontFamily: "Inter-SemiBold",
    fontSize: RFValue(SIZES.h25),
  },

  SemiBold14: {
    fontFamily: "Inter-SemiBold",
    fontSize: RFValue(SIZES.h14),
  },

  Medium18: {
    fontFamily: "Inter-Medium",
    fontSize: RFValue(SIZES.h18),
  },
  Medium15: {
    fontFamily: "Inter-Medium",
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: "Inter-Medium",
    fontSize: RFValue(SIZES.h14),
  },

  Regular16: {
    fontFamily: "Inter-Regular",
    fontSize: RFValue(SIZES.h16),
  },

  Regular14: {
    fontFamily: "Inter-Regular",
    fontSize: RFValue(SIZES.h14),
  },
};

const appTheme = { FONTS, SIZES, COLORS };

export default appTheme;
