import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";

export default styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
  },
  title: {
    ...FONTS.SemiBold25,
    textAlign: "center",
    paddingVertical: SIZES.padding2,
  },
  description: {
    ...FONTS.Medium14,
    color: COLORS.lightTextColor,
    textAlign: "center",
    lineHeight: 25,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnView: {
    paddingTop: SIZES.padding2 * 2,
    width: "100%",
  },
});
