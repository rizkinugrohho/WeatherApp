import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Information</Text>

      <View style={styles.rowContainer}>
        <Text style={[styles.text, styles.cityName]}>{weatherData.name}</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={[styles.temperature, styles.text]}>
          {weatherData.main.temp} °C
        </Text>
        <Text style={styles.weatherDescription}>
          {weatherData.weather[0].description}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Visibility:</Text>
          <Text style={styles.infoValue}>{weatherData.visibility} km</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Wind Speed:</Text>
          <Text style={styles.infoValue}>{weatherData.wind.speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  cityName: {
    marginBottom: 10,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
  },
  weatherDescription: {
    fontSize: 18,
  },
  infoContainer: {
    marginTop: 20,
    width: "100%",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  infoValue: {
    fontSize: 18,
    color: "#333",
  },
});

export default WeatherInfo;
