import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constant";
import { SIZES } from "../../constant";
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: SIZES.width - 30,
    padding: SIZES.padding2 * 1.2,
    borderRadius: SIZES.radius / 2.5,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SIZES.padding2,
  },
  text: {
    ...FONTS.SemiBold14,
  },
  dateText: {
    ...FONTS.Medium14,
  },
  daysText: {
    ...FONTS.SemiBold14,
    width:"28%"
  },
  img: {
    marginVertical: SIZES.padding2,
    width: 60,
    height: 60,
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  view: {
    alignItems: "center",
    marginRight:SIZES.padding2
  },
  rowView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
