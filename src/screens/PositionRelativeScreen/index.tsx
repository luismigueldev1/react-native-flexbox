import React from "react"
import { StyleSheet, View } from "react-native"

export function PositionRelativeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28c4d9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: "#5856D6",
    borderWidth: 10,
    borderColor: "white",
  },

  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: "#F0A23B",
    borderWidth: 10,
    borderColor: "white",
    top: 20,
  },
})
