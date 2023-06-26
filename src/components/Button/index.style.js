import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";

const styles = StyleSheet.create({
  btn: {
    marginVertical:SIZES.padding2,
    height: 55,
    width: "80%",
    alignSelf:'center',
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:SIZES.radius /3
  },
});

export default styles;
