/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import "react-native-gesture-handler";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { COLORS } from "./src/constant";


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.primary} />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
