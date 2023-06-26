import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.radius / 2.5,
    overflow: "hidden",
  },
  picker: {
    color: COLORS.textColor,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
