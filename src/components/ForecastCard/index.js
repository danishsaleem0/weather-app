import React from "react";
import { View, Image, ScrollView } from "react-native";
import styles from "./index.style";
import { Icon, Text } from "..";
import { currentDate, removeDecimal, timeConverter } from "../../utils/Helper";
import { images } from "../../constant";
import {IMAGE_PATH} from "@env";

export default function ForCastCard({ data, type }) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text
          text={type === "Today" ? "Next 24 Hours" : type}
          style={styles.text}
        />
        {type === "Today" ? (
          <Text style={styles.dateText} text={currentDate()} />
        ) : (
          <Icon name="calendar" type="ant-design" />
        )}
      </View>
      <ScrollView
      showsHorizontalScrollIndicator={false}
        horizontal={type === "Today"}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {data?.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={type === "Today" ? styles.view : styles.rowView}
            >
              {type != "Today" && (
                <Text
                  text={timeConverter(item.dt, (days = true))}
                  style={styles.daysText}
                />
              )}
              {type != "Today" ? (
                <>
                  <View style={styles.imageView}>
                    <Image
                      source={
                        item?.weather[0]?.icon
                          ? {
                              uri: `${IMAGE_PATH}${item?.weather[0]?.icon}.png`,
                            }
                          : images.logo
                      }
                      style={styles.img}
                    />
                  </View>
                  <Text
                    text={`${removeDecimal(item?.temp?.min)} To ${removeDecimal(item?.temp?.max)}`}
                    style={styles.celciusText}
                  />
                </>
              ) : (
                <>
                  <Text
                    text={removeDecimal(item?.temp)}
                    style={styles.celciusText}
                  />
                  <Image
                    source={
                      item?.weather[0]?.icon
                        ? { uri: `${IMAGE_PATH}${item?.weather[0]?.icon}.png` }
                        : images.logo
                    }
                    style={styles.img}
                  />
                </>
              )}
              {type === "Today" && <Text text={timeConverter(item?.dt)} />}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
