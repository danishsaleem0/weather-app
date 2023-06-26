import React from "react";
import { Image, View } from "react-native";
import style from "./index.style";
import { Button, Container, Text } from "../../components";
import { images } from "../../constant";

function GetStarted({navigation}) {
  const onGetStartedPress = () =>  {
    navigation.navigate("Home")
  }
  return (
    <Container scroll={true} style={style.container}  >
      <Image source={images.logo} resizeMode="contain" style={style.img} />
      <Text style={style.title} text={"Discover the weather \n in your city"} />
      <Text
        style={style.description}
        text={"Get to know your weather maps and \n radar precipitation forecast"}
      />
      <View style={style.btnView}>
        <Button text={"Get Started"} onPress={onGetStartedPress} />
      </View>
    </Container>
  );
}

export default GetStarted;
