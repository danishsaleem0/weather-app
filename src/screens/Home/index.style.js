import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constant";

export default styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
  },
  celciusText: {
    ...FONTS.Bold55,
  },
  mainText: {
    ...FONTS.Medium15,
  },
  flex: {
    paddingTop:SIZES.base,
    // flexDirection: "row",
    alignItems: "center",
  },
  commonText: {
    ...FONTS.Medium15,
  },
  cardView: {
    paddingTop: SIZES.padding * 1.5,
  },
});
