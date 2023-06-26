import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./index.style";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../constant";

export default function Container({ children, scroll, style }) {
  return (
    <LinearGradient style={{ flex: 1}}
     start={{x: 0.0, y: 0.30}} end={{x: 0.5, y: 1.2}}
      colors={COLORS.secondary}
    >
      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container2, style]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </LinearGradient>
  );
}
