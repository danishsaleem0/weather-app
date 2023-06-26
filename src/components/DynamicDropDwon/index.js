import React from "react";
import { View } from "react-native";
import styles from "./index.style";
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "../../constant";

export default function DynamicDropDown({ selectedItem, onValueChange, data,prompt }) {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        prompt={prompt}
        dropdownIconColor={COLORS.textColor}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => onValueChange(itemValue)}
      >
        {data?.map((item, index) => (
          <Picker.Item key={index.toString()} label={item.name} value={item} />
        ))}
      </Picker>
    </View>
  );
}
