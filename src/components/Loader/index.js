import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../constant";
import styles from "./index.style";


export default function index() {
  return (
    <View style={styles.view}>
      <ActivityIndicator color={COLORS.textColor} size={"large"} />
    </View>
  );
}
