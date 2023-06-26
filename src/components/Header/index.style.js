import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constant";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.padding2,
  },
  btn: {
    padding: 3,
  },
  text: {
    ...FONTS.Regular16,
    padding: 3,
    marginRight:SIZES.base

  },
  emptyView: {
    width: 20,
  },
});
