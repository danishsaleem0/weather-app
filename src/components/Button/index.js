import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./index.style";
import { Text } from "..";

export default function Button({
  text,
  textStyle,
  onPress,
  btnStyle,
  disabled,
}) {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
      style={[styles.btn, btnStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[textStyle, styles.text]} text={text} />
    </TouchableOpacity>
  );
}
