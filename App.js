import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./src/components/constants";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";
import * as Animatable from "react-native-animatable";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState("");

  const searchWeather = (location) => {
    // Mengatur status ke "loading"
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility = (data.visibility / 1000).toFixed(2); // Convert meters to kilometers
        data.main.temp = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
        setWeatherData(data);
        // Mengatur status ke "success"
        setStatus("success");
      })
      .catch((error) => {
        // Mengatur status ke "error"
        setStatus("error");
        console.log("AxiosError:", error.message);
      });
  };

  // Definisikan function renderComponent
  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" duration={1500}>
        <Text style={styles.header}>Weather App</Text>
      </Animatable.View>
      <WeatherSearch searchWeather={searchWeather} />
      {/* Menggunakan function renderComponent di sini */}
      <View style={styles.margintTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEEB", // Warna cerah
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  margintTop20: {
    marginTop: 20,
  },
});

export default App;
