import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.base * 2,
    paddingVertical:SIZES.padding2

  },
  container2: {
    flexGrow: 1,
    paddingHorizontal: SIZES.base * 2,
    
  },
});

export default styles