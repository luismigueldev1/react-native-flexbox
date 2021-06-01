import React from "react"
import { StyleSheet, View, Dimensions } from "react-native"

export function PositionAbsoluteScreen() {
  const { height } = Dimensions.get("window")
  return (
    <View style={{ ...styles.container, height: height * 0.5 }}>
      <View style={styles.cajaVerde}></View>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28c4d9",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
  },

  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  cajaVerde: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "green",
    borderWidth: 10,
    borderColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
})
