import React, { useEffect, useState } from "react";
import { Image, View,ScrollView } from "react-native";
import {
  Container,
  DynamicDropDown,
  ForCastCard,
  Header,
  Loader,
  NoData,
  Text,
} from "../../components";
import { images } from "../../constant";
import styles from "./index.style";
import HomeFunctional from "./function";
import {IMAGE_PATH} from "@env"
import { removeDecimal } from "../../utils/Helper";
import { cityArray } from "../../config";

export default function Home({ navigation }) {
  const { fetchWeather, loading, weatherData } = HomeFunctional();
  const [selectedCity, setSelectedCity] = useState(null);
  const [defaultCity] = cityArray;

  useEffect(() => {
    fetchWeather(defaultCity.lat, defaultCity.lon);
  }, []);

  const onDropDownValueChange = (value) => {
    setSelectedCity(value)
    fetchWeather(value?.lat, value?.lon)
  };

  return (
    <Container>
      <Header
        title={"Welcome"}
        isBack={true}
        onLeftIconPress={() => navigation.goBack()}
        showLeftIcon={{
          type: "Ionicon",
          name: "arrow-back",
          size: 25,
        }}
      />
      <DynamicDropDown
        prompt={"Cities"}
        data={cityArray}
        selectedItem={selectedCity}
        onValueChange={onDropDownValueChange}
      />
      {loading ? (
        <Loader />
      ) : !loading && !weatherData ? (
        <NoData text={"No Data Available"} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Image
            source={
              weatherData?.current?.weather?.[0]?.icon
                ? {
                    uri: `${IMAGE_PATH}${weatherData?.current?.weather?.[0]?.icon}.png`,
                  }
                : images.logo
            }
            style={styles.img}
          />
          <Text
            text={removeDecimal(weatherData?.current?.temp)}
            style={styles.celciusText}
          />
          <Text
            text={weatherData?.current?.weather?.[0]?.main}
            style={styles.mainText}
          />
          <View style={styles.flex}>
            <Text
              text={`Feels Like: ${removeDecimal(
                weatherData?.current?.feels_like
              )}`}
              style={styles.commonText}
            />
            <Text
              text={`Wind Speed: ${weatherData?.current?.wind_speed}`}
              style={styles.commonText}
            />
          </View>

          <View style={styles.cardView}>
            <ForCastCard type="Today" data={weatherData?.hourly} />
          </View>
          <View style={styles.cardView}>
            <ForCastCard type="Next Forcast" data={weatherData?.daily} />
          </View>
        </ScrollView>
      )}
    </Container>
  );
}
