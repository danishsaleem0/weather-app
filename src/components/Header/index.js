import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon, Text } from "..";
import styles from "./index.style";

export default function Header({
  title,
  onLeftIconPress,
  onRightIconPress,
  showLeftIcon,
  showRightIcon,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={!showLeftIcon}
        onPress={onLeftIconPress}
        style={styles.btn}
        activeOpacity={0.8}
      >
        {showLeftIcon && (
          <Icon {...showLeftIcon} />
        )}
      </TouchableOpacity>
      {title && <Text text={title} style={styles.text} />}
      <TouchableOpacity
        disabled={!showRightIcon}
        onPress={onRightIconPress}
        style={styles.btn}
        activeOpacity={0.8}
      >
        {showRightIcon && (
          <Icon
           {...showRightIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
