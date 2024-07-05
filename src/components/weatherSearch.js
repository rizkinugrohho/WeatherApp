import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomTextInput from "./customTextInput";

const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        value={location}
        onChangeText={setLocation}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: 20,
    width: "100%",
  },
});

export default WeatherSearch;
